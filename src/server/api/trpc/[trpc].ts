import {createNuxtApiHandler} from 'trpc-nuxt'
import {appRouter} from '../../trpc/routers'
import {createContext} from '../../trpc/context'

/**
 * One tRPC handler to handle all the routs. You could apply additional cache headers here
 */
export default createNuxtApiHandler({
  router: appRouter,
  createContext,
  /**
   * @link https://trpc.io/docs/caching#api-response-caching
   */
  responseMeta(opts) {
    // cache request for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
    return {
      // headers: {
      //   'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
      // },
    }
  }
})