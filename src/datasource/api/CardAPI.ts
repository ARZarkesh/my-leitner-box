import { httpGet } from '.'

export interface API_Card_GetSuggestions_Input {
  query: string
}

export interface API_Card_GetSuggestions_Output {
  translate: string
}

export async function API_Card_GetSuggestions(body: API_Card_GetSuggestions_Input) {
  return httpGet<API_Card_GetSuggestions_Output>('/api/translate', { body })
}

export interface API_Card_AddWord_Input {
  front_text: string
  back_text: string
}

export interface API_Card_AddWord_Output {}

export async function API_Card_AddWord(body: API_Card_AddWord_Input) {
  return httpGet<API_Card_AddWord_Output>('/api/card/add', { body })
}
