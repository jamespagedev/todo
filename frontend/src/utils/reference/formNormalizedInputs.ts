export const getFormattedPhoneNumber = (input: string) => {
  if (!input) return input;
  const num = input.replace(/[^\d]/g, '');
  const numLength = num.length;

  if (numLength < 4) return num;
  if (numLength < 7) return `${num.slice(0, 3)}-${num.slice(3)}`;
  return `${num.slice(0, 3)}-${num.slice(3, 6)}-${num.slice(6, 10)}`;
};

export const convertNumToStrWithCommasThreeDecimalTruncated = (num: number) => {
  return (Math[num * 1000 < 0 ? 'ceil' : 'floor'](num * 1000) / 1000).toLocaleString();
};
