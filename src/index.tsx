import { NativeModules } from 'react-native';

type SilentListenerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SilentListener } = NativeModules;

export default SilentListener as SilentListenerType;
