import * as controller from './controller'

export const init = router => {
  router
    .route('/series')
    .get(controller.getSeries)
}