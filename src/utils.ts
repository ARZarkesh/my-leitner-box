export function handleCommonError(error: Error) {
  // eslint-disable-next-line no-alert
  alert(error.message || 'an arror occured')
}
