import { char, timestamp, pgEnum } from 'drizzle-orm/pg-core'
import { sql } from 'drizzle-orm'

/**
 * A centralized list of standardized Drizzle ORM schema field definitions to prevent duplication errors
 */

export const createdAt = timestamp('createdAt', { withTimezone: true, mode: 'date' }).defaultNow()
export const updatedAt = timestamp('updatedAt', { withTimezone: true, mode: 'date' }).default(null)
export const datetime = (name: string) => timestamp(name, { withTimezone: true, mode: 'date' })
export const id = char('id', { length: 12 }).primaryKey().default(sql`nanoid(12)`)

// Timestamps is inspired by the Mongoose "timestamps" option to provide automated timestamps for create and update actions
export const timestamps = {
    createdAt,
    updatedAt
}
