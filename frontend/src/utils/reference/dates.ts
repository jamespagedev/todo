const monToStr: {[key: string]: string} = {
  // note, javascript has months 0 indexed
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

function getTimeAmPm(date: Date) {
  return date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}

export const getDayNameOfWeek = () => {
  return new Date().toLocaleDateString('en-us', {weekday: 'long'});
};

export const getDateDdMmYy = (date: Date) => {
  // month is 0 indexed in javascript.
  return `${date.getMonth() > 8 ? '' : '0'}${date.getMonth() + 1}/${
    date.getDate() > 9 ? '' : '0'
  }${date.getDate()}/${date.getFullYear()}`;
  // return `${date.getMonth() > 8 ? '' : '0'}${date.getMonth() + 1}/${date.getDate() > 9 ? '' : '0'}${date.getDate()}/${date.getFullYear()}`;
};

export const getDateStrMonDdAtTime = (date: Date) => {
  const mon = monToStr[date.getMonth()];
  return `${mon} ${date.getDate()} at ${getTimeAmPm(date)}`;
};

export const getStrDateFormatYyyyMmDdWithDashes = (date: Date | null = null) => {
  if (date === null) {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() > 8 ? '' : '0'}${now.getMonth() + 1}-${
      now.getDate() > 9 ? '' : '0'
    }${now.getDate()}`;
  }
  return `${date.getFullYear()}-${date.getMonth() > 8 ? '' : '0'}${date.getMonth() + 1}-${
    date.getDate() > 9 ? '' : '0'
  }${date.getDate()}`;
};

export const getStrTimeAmPmDateMmDdYyyy = (date: Date) => {
  return `${getTimeAmPm(date)} ${getDateDdMmYy(date)}`;
};

export function getStrDateCurrentFormatFromStrDate(unknownStrDate: string) {
  // assumed format: yyyy-mm-ddTHH:MM:ss.FFFFFFF
  if (unknownStrDate.toLowerCase().includes('z')) {
    return unknownStrDate;
  }
  return unknownStrDate + 'Z';
}

export function getDateThreeMonthsAgoAtTimeZeroAndStartDayOne() {
  // javascript has months 0-indexed
  const march = 2;
  const todaysDate = new Date();
  let finalDate: Date | null = null;
  if (todaysDate.getMonth() >= march) {
    finalDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth() - march, 1);
  } else {
    const monthsLeft = todaysDate.getMonth() === 0 ? 0 : march - todaysDate.getMonth();
    finalDate = new Date(todaysDate.getFullYear() - 1, 12 - monthsLeft, 1);
  }
  finalDate.setHours(0, 0, 0, 0);
  return finalDate;
}

export function getDateSixMonthsAgoAtTimeZeroAndStartDayOne() {
  // javascript has months 0-indexed
  const june = 5;
  const todaysDate = new Date();
  let finalDate: Date | null = null;
  if (todaysDate.getMonth() >= june) {
    finalDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth() - june, 1);
  } else {
    const monthsLeft = todaysDate.getMonth() === 0 ? 0 : june - todaysDate.getMonth();
    finalDate = new Date(todaysDate.getFullYear() - 1, 12 - monthsLeft, 1);
  }
  finalDate.setHours(0, 0, 0, 0);
  return finalDate;
}

export function getDateFirstDayOfYearAtTimeZero() {
  // javascript has months 0-indexed
  const todaysDate = new Date();
  const finalDate = new Date(todaysDate.getFullYear(), 0, 1);
  finalDate.setHours(0, 0, 0, 0);
  return finalDate;
}

export function getDateFirstDayOfApplicationAtTimeZero() {
  // javascript has months 0-indexed
  const finalDate = new Date(2020, 0, 1);
  finalDate.setHours(0, 0, 0, 0);
  return finalDate;
}
