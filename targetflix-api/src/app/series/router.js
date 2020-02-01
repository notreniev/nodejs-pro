import * as controller from './controller'
import authenticate from '../../middlewares/authenticate'

export const init = router => {
  router
    .route('/series')
    .get(authenticate, controller.getSeries)  
}