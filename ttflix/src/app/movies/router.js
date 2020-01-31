import * as controller from './controller'

export const init = router => {
  router
    .route('/movies')
    .get(controller.getMovies)
}