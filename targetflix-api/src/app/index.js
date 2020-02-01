import * as movieRouter from './movies/router'
import * as seriesRouter from './series/router'
import * as usersRouter from './users/router'
import * as showsRouter from './shows/router'
import * as authRouter from './auth/router'


export const initializeRoutes = router => {
  authRouter.init(router)
  movieRouter.init(router)
  seriesRouter.init(router)
  showsRouter.init(router)
  usersRouter.init(router)
  //...
  return router
}