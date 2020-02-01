import * as controller from './controller'
import authenticate from '../../middlewares/authenticate'

export const init = router => {
  router
    .route('/shows')
    .get(authenticate, controller.getShows)
}