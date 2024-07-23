/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#33524C';
const tintColorDark = '#fff';

export const Colors = {
  WHITE: '#edfaf7',
  PRIMARY: '#33524C',
  GRAY: '#7d7d7d',
  LIGHT_GRAY: '#d3e8d8',
  LIME:"#afd032",
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#33524C',
    tabIconDefault: '#33524C',
    tabIconSelected: "#33524C",
  },
  dark: {
    text: '#33524C',
    background: '#151718',
    tint: tintColorDark,
    icon: '#33524C',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
