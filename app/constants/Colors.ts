/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Dimensions } from "react-native";


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
export const { width, height } = Dimensions.get('window');
export const Colors = {
  white:'#FFFFFF',
  silver:'#78828A',
  blue:'#172AF2',
  grayBlack:'#0E100F',
  borderBlue:'#172AF280',
  bordertrr:'#C2D2FF',
  newGray:'#D6D9DC',
  newBorder:'#E0E0E0',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
