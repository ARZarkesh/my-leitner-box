export function set(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function get(key: string) {
  const value = localStorage.getItem(key)
  if (value)
    return JSON.parse(value)

  return null
}

export function remove(key: string) {
  return localStorage.removeItem(key)
}
