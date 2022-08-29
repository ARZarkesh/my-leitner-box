import { get, remove, set } from '.'

export function KV_User_SetToken(token: string) {
  set('token', token)
}

export function KV_User_GetToken() {
  return get('token')
}

export function KV_User_RemoveToken() {
  return remove('token')
}
