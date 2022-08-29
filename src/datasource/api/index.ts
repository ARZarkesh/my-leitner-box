import { KV_User_GetToken, KV_User_RemoveToken, KV_User_SetToken } from '../kv/UserKV'

interface DeferedPromise<T> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (reason: any) => void
}

function getDeferedPromise<T = any>(): DeferedPromise<T> {
  const result: DeferedPromise<T> = {} as any
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

export async function httpGet<T>(path: string, meta: { body?: any; headers?: Record<string, string> } = {}): Promise<T> {
  const deferred = getDeferedPromise()
  const request = new XMLHttpRequest()

  const queryString = meta?.body ? `?${Object.keys(meta.body).map(key => `${key}=${encodeURIComponent(meta.body[key])}`).join('&')}` : ''

  let token: string
  const storedToken = KV_User_GetToken()
  if (storedToken) {
    token = storedToken
  }
  else {
    token = window.prompt('Please enter your token')!
    KV_User_SetToken(token)
  }

  request.open('GET', `${BASE_API}${path}${queryString}`, true)
  request.setRequestHeader('token', token)
  if (meta.headers) {
    for (const header in meta.headers)
      request.setRequestHeader(header, meta.headers[header])
  }

  request.onload = async function() {
    let response
    try {
      response = JSON.parse(request.responseText)
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
      deferred.reject(new Error('Unpacking Error'))
      return
    }
    if (this.status === 401) {
      KV_User_RemoveToken()
      token = window.prompt('Please enter your token')!
      KV_User_SetToken(token)
      request.send()
    }
    if (this.status < 200 || this.status >= 400 || response?.status === 'error')
      deferred.reject(response.error || response)

    else
      deferred.resolve(response.data || response)
  }

  request.onerror = () => {
    // There was a connection error of some sort
    deferred.reject(new Error('Network Error'))
  }

  request.send()

  return deferred.promise
}
