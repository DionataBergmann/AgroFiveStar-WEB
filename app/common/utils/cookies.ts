import {
  destroyCookie as destroyNookie,
  parseCookies,
  setCookie as setNookie,
} from 'nookies'

import { config } from '../../config/env'

export function getCookie(key: string, ctx?: any) {
  const cookies = parseCookies(ctx)

  return cookies?.[`@${config.COOKIE_PREFIX}:${key}`]
}

export function setCookie(key: string, value: string, ctx?: any) {
  return setNookie(ctx, `@${config.COOKIE_PREFIX}:${key}`, value)
}

export function destroyCookie(key: string, ctx?: any) {
  return destroyNookie(ctx, `@${config.COOKIE_PREFIX}:${key}`, {
    path: '/',
  })
}
