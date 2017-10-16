import dateFns from 'date-fns';

const numberOfDaysForHistoryCutoff = 2;

export const ONE_MINUTE_MILLIS = 60000;
export const ONE_HOUR_MILLIS = 60 * ONE_MINUTE_MILLIS;
export const ONE_DAY_MILLIS = 60 * ONE_HOUR_MILLIS;

export const HISTORICAL_CUTOFF_MILLIS =
  ONE_DAY_MILLIS * numberOfDaysForHistoryCutoff;

export function setDisplayDate(date) {
  return dateFns.format(date, 'MMMM D, YYYY');
}

export const historicalCutoffDate = () => {
  const currentDateInMillis = new Date().valueOf();
  return currentDateInMillis - HISTORICAL_CUTOFF_MILLIS;
};

const dateUtilities = {
  setDisplayDate,
  historicalCutoffDate,
  HISTORICAL_CUTOFF_MILLIS,
  ONE_MINUTE_MILLIS,
  ONE_HOUR_MILLIS,
  ONE_DAY_MILLIS,
};

export default dateUtilities;
