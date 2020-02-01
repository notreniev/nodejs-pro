import * as controller from './controller'

import authenticate from '../../middlewares/authenticate'

export const init = router => {
  router
    .route('/users')
    .get(controller.getAll)

    router
    .route('/users/liked')
    .get(authenticate, controller.getLikeds)

    router
    .route('/users/like')
    .post(authenticate, controller.like)
} 