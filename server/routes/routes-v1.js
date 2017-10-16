import express from 'express';

import performanceController from '../controllers/performancesController';
import tourController from '../controllers/tourController';
import artistController from '../controllers/artistController';
import cronEventsController from '../controllers/cronEventsController';
import eventsController from '../controllers/eventsController';
import locationsController from '../controllers/locationsController';
import emailController from '../controllers/emailController';
import registrationController from '../controllers/registrationController';
import accountController from '../controllers/accountController';

import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();
router.route('/cron-events').get(cronEventsController.get);
router.route('/artists').get(artistController.get).post(artistController.post);

router
  .route('/account')
  .post(accountController.post)
  .get(accountController.get);

router.route('/registration').post(registrationController.post);

router.use(authMiddleware());

router.route('/events/:id?').get(eventsController.get);
router.route('/locations').get(locationsController.get);
router.route('/email').get(emailController.get);

router.route('/tour').get(tourController.get);

router.route('/performances/:id?').get(performanceController.get);

export default router;
