import {neon, neonConfig, NeonQueryFunction} from '@neondatabase/serverless'
import {drizzle, NeonHttpDatabase} from 'drizzle-orm/neon-http'

neonConfig.fetchConnectionCache = true;

let sql: NeonQueryFunction<boolean, boolean> | null = null;
let db: NeonHttpDatabase | null = null;

export const useDb = () => {
    const config = useRuntimeConfig();
    if (sql && db) {
        return db
    }

    if(!config.db.url) {
        throw new Error('Missing db.url in runtime config')
    }

    sql = neon(config.db.url);
    db = drizzle(sql);

    return db
}
