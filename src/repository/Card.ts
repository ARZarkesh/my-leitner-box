import type { API_Card_AddWord_Input, API_Card_GetSuggestions_Input } from '~/datasource/api/CardAPI'
import { API_Card_AddWord, API_Card_GetSuggestions } from '~/datasource/api/CardAPI'

export async function Card_GetSuggestions(body: API_Card_GetSuggestions_Input) {
  return API_Card_GetSuggestions(body)
}

export async function Card_AddWord(body: API_Card_AddWord_Input) {
  return API_Card_AddWord(body)
}
