/* Formats a dayJS object into a DD-MM-YYYY string */
export function formatTimeDDMMYYYY(date) {
  return date.format('DD-MM-YYYY');
}


/* Calculates the difference in time between two dayJS objects and
   returns it in a formatted string */
export function formatTimeDiff(date1, date2) {
  const formatOptions = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
  
  for (let i = 0; i < formatOptions.length; i++) {
    const formatOption = formatOptions[i];
    const diff = Math.abs(date1.diff(date2, formatOption, true));

    if (diff >= 1) {
      const roundDiff = Math.abs(date1.diff(date2, formatOption));

      if (roundDiff == 1) {
        return `1 ${formatOption}`;
      }

      return `${Math.floor(diff)} ${formatOption}s`;
    }
  }

  return '0 seconds';
}