import * as controller from './controller'
import authenticate from '../../middlewares/authenticate'

export const init = router => {
  router
    .route('/movies')
    .get(authenticate, controller.getMovies)

  router
    .route('/movies')
    .post(() => {})
}