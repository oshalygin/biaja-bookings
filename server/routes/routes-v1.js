import express from 'express';
import performanceController from '../controllers/performancesController';
import tourController from '../controllers/tourController';
import artistController from '../controllers/artistController';
import cronEventsController from '../controllers/cronEventsController';
import eventsController from '../controllers/eventsController';
import locationsController from '../controllers/locationsController';

const router = express.Router();
router.route('/cron-events').get(cronEventsController.get);

router.route('/events/:id?').get(eventsController.get);
router.route('/locations').get(locationsController.get);
router.route('/artists').get(artistController.get).post(artistController.post);

router.route('/tour').get(tourController.get);

router.route('/performances/:id?').get(performanceController.get);

export default router;
