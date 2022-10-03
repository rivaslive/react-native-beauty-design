const media = '@media screen and (min-width: 1100px)'

export const onlyMobile = {
  '@initial': {
    display: 'block'
  },
  [media]: {
    display: 'none !important'
  }
};

export const onlyDesk = {
  display: 'none',
  [media]: {
    display: 'flex !important',
    alignItems: 'center',
  }
};
