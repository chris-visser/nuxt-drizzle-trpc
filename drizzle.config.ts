import type {Config} from 'drizzle-kit'

export default {
  schema: './src/server/db',
  out: './src/server/db/migrations'
} satisfies Config;