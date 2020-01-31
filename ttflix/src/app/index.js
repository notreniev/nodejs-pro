import * as movieRouter from './movies/router'

export const routes = router => {
    movieRouter.init(router)
    //seriesRouter.execute(router)
    //..
    return router
}