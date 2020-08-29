import { NativeModules, NativeEventEmitter } from 'react-native';
import type {
  addEventListenerType,
  removeAllListenersType,
  removeEventListenerType,
  eventCallback,
  silentListenerType,
  setCheckIntervalType,
} from './types';

const { SilentListener } = NativeModules;

const silentEventEmitter: NativeEventEmitter = new NativeEventEmitter(
  SilentListener
);

const EVENT_NAME = 'onSilentChange';

const addEventListener: addEventListenerType = (
  callback: eventCallback
): void => {
  silentEventEmitter.addListener(EVENT_NAME, callback);
};

const removeEventListener: removeEventListenerType = (
  callback: eventCallback
): void => {
  silentEventEmitter.removeListener(EVENT_NAME, callback);
};

const removeAllListeners: removeAllListenersType = (): void => {
  silentEventEmitter.removeAllListeners(EVENT_NAME);
};

const setCheckInterval: setCheckIntervalType = (value: number) => {
  SilentListener.setInterval(value);
};

const silentListener: silentListenerType = {
  addEventListener,
  removeEventListener,
  removeAllListeners,
  setCheckInterval,
};

export default silentListener;
