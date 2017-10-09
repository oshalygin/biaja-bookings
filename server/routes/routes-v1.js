import express from 'express';
// import authMiddleware from '../middleware/authMiddleware';

// import authService from '../services/authService';

// import authController from '../controllers/authController';
// import configuration from '../utilities/configuration';

const router = express.Router();

// // {api/v1/auth/login/google}
// router
//   .route('/auth/login/google')
//   .get(authService.googleAuthentication);

// // {api/v1/auth/callbacks/google}
// router
//   .route('/auth/callbacks/google')
//   .get(authService.googleCallback, authController.userHandler);

// Authenticated Routes
// router.use(authMiddleware());

// // {api/v1/workOrders}
// router
//   .route('/workOrders/:id?')
//   .get(workOrdersController.get)
//   .put(workOrdersController.put)
//   .post(workOrdersController.post)
//   .delete(workOrdersController.delete);

// // {api/v1/users}
// router
//   .route('/users/:id?')
//   .head(usersController.head)
//   .get(usersController.get)
//   .post(usersController.post)
//   .put(usersController.put);

export default router;
