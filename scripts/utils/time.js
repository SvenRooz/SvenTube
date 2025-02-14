import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


/* Formats a dayJS object into a DD-MM-YYYY string */
export function formatTimeDDMMYYYY(date) {
  return date.format('DD-MM-YYYY');
}


/* Calculates the difference in time between a specified date and the
   current date and returns the result as a formatted string */
export function formatTimeDiff(date) {
  const formatOptions = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
  const currentDate = dayjs();

  for (let i = 0; i < formatOptions.length; i++) {
    const formatOption = formatOptions[i];
    const diff = Math.abs(date.diff(currentDate, formatOption, true));

    if (diff >= 1) {
      const roundDiff = Math.abs(date.diff(currentDate, formatOption));

      if (roundDiff == 1) {
        return `1 ${formatOption}`;
      }

      return `${Math.floor(diff)} ${formatOption}s`;
    }
  }

  return '0 seconds';
}


export function formatTimeDMonthY(date) {
  return date.format('D MMM YYYY');
}