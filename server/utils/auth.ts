import { D1Dialect } from '@atinux/kysely-d1'
import { betterAuth } from 'better-auth'
import { admin, anonymous } from 'better-auth/plugins'

let _auth: ReturnType<typeof betterAuth>
export function serverAuth() {
  const { github } = useRuntimeConfig()

  if (!_auth) {
    _auth = betterAuth({
      database: {
        dialect: new D1Dialect({ database: hubDatabase() }),
        type: 'sqlite',
      },
      secondaryStorage: {
        get: key => hubKV().getItemRaw(`_auth:${key}`),
        set: (key, value, ttl) => {
          return hubKV().set(`_auth:${key}`, value, { ttl })
        },
        delete: key => hubKV().del(`_auth:${key}`),
      },
      baseURL: getBaseURL(),
      emailAndPassword: { enabled: true },
      socialProviders: { github },
      account: {
        accountLinking: {
          enabled: true,
        },
      },
      plugins: [anonymous(), admin()],
    })
  }
  return _auth
}

function getBaseURL() {
  let betterAuthUrl = ''
  try {
    betterAuthUrl = useRuntimeConfig().betterAuthUrl
  }
  catch (_e) {
    betterAuthUrl = getRequestURL(useEvent()).origin
  }
  return betterAuthUrl
}
