export * from './colors';

export const getTextForAvatar = (
  text: string = '',
  countText: number | 'all' = 2
) => {
  if (!text) {
    return text;
  }
  if (countText === 'all') {
    return text;
  }

  const arrayText = text.trim().split(' ');
  let count = 1;
  let out = '';

  arrayText.forEach((word) => {
    if (count > countText) {
      return;
    }
    out += `${word[0].toUpperCase()}`;
    count++;
  });

  return out;
};

export const getRandomId = (prefix = 'idx') => {
  const random = Date.now() + Math.random().toString().replace('.', '-');
  return `${prefix}-${random}`;
};
