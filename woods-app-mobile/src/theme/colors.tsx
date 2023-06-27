export const colors = {
  white: { main: '#ffffff' },
  gray: { main: '#f7f7f7', darker: '#E5E5E5', dark: '#959595' },
  cream: { main: '#f3f1e7' },
  ceramic: { main: '#edebe9' },
  black: { main: '#000000', warm: '#2d2926', warmer: '#3d3935' },
  green: {
    main: '#00653e',
    apron: '#00a862',
    darkApron: '#008248',
    accent: '#008248',
    light: '#d4e9e2',
    secondaryLight: 'rgba(212, 233, 226, 0.33)',
    house: '#1E3932',
  },
  gold: {
    main: '#cba258',
    dark: '#C4942C',
  },
  red: {
    main: '#e75b52',
  },
  orange: {
    light: '#FAF2E6',
    main: '#D3A762',
  },
  yellow: {
    main: '#fbbc05',
  },
  transparent: {
    main: 'transparent',
  },
};

export type ColorTypes =
  | 'white.main'
  | 'gray.main'
  | 'gray.dark'
  | 'gray.darker'
  | 'cream.main'
  | 'ceramic.main'
  | 'black.main'
  | 'black.warm'
  | 'black.warmer'
  | 'green.main'
  | 'green.apron'
  | 'green.darkApron'
  | 'green.accent'
  | 'green.light'
  | 'green.secondaryLight'
  | 'green.house'
  | 'gold.main'
  | 'gold.dark'
  | 'red.main'
  | 'orange.main'
  | 'orange.light'
  | 'yellow.main'
  | 'transparent.main';
