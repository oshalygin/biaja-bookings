import express from 'express';
// import authMiddleware from '../middleware/authMiddleware';
import performanceController from '../controllers/performancesController';
import tourController from '../controllers/tourController';
import artistController from '../controllers/artistController';
import cronEventsController from '../controllers/cronEventsController';
import eventsController from '../controllers/eventsController';

// import authService from '../services/authService';

// import authController from '../controllers/authController';
// import configuration from '../utilities/configuration';

const router = express.Router();
router.route('/cron-events').get(cronEventsController.get);

router.route('/events').get(eventsController.get);
router.route('/artists').get(artistController.get).post(artistController.post);

router.route('/tour').get(tourController.get);

router.route('/performances/:id?').get(performanceController.get);

export default router;
