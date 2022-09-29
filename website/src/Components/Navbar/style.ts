export const onlyMobile = {
  '@initial': {
    display: 'block'
  },
  '@xs': {
    display: 'none'
  }
};

export const onlyDesk = {
  display: 'none',
  '@xs': {
    display: 'flex',
    alignItems: 'center',
  }
};
