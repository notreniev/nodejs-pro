import * as movieRouter from './movies/router'

export const initializeRoutes = router => {
    movieRouter.init(router)
    //seriesRouter.execute(router)
    //..
    return router
}