export const getIdComponent = (title: string) => {
  return `${title}`.split(' ').join('-');
};
