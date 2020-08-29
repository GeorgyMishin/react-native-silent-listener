import { Platform } from 'react-native';
import defaultIos from './silentListener.ios';
import defaultAndroid from './silentListener.android';
export * from './types';

export default Platform.select({
  ios: defaultIos,
  android: defaultAndroid,
});
