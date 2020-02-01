import * as controller from './controller'

export const init = router => {
  router
    .route('/signin')
    .post(controller.signin)
  
    router
    .route('/signup')
    .post(controller.signup)
}
