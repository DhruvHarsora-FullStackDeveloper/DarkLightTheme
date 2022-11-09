const commonColor = {
  colors: {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
  },
};

const light = {
  colors: {
    themeColor: '#FFFFFF',
    white: '#000000',
    sky: '#039BE5',
    gray: 'gray',
    ...commonColor.colors,
  },
};

const dark = {
  colors: {
    themeColor: '#000000',
    white: '#FFFFFF',
    sky: '#01579B',
    gray: 'white',
    ...commonColor.colors,
  },
};

export default { light, dark };
