import actionTypes from './actionTypes';

export const saveNotification = data => ({
  type: actionTypes.SAVE_NOTIFICATION,
  data,
});

export const saveNotificationSuccess = data => ({
  type: actionTypes.SAVE_NOTIFICATION_SUCCESS,
  data,
});

export const removeNotifications = () => ({
  type: actionTypes.REMOVE_NOTIFICATIONS,
});

export const removeNotificationsSuccess = () => ({
  type: actionTypes.REMOVE_NOTIFICATIONS_SUCCESS,
});
