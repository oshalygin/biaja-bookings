import dateFns from 'date-fns';

export function setDisplayDate(date) {
  return dateFns.format(date, 'MMMM D, YYYY');
}

const dateUtilities = {
  setDisplayDate,
};

export default dateUtilities;
