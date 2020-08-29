import type {
  addEventListenerType,
  removeEventListenerType,
  removeAllListenersType,
  silentListenerType,
  setCheckIntervalType,
} from './types';

const addEventListener: addEventListenerType = () => {
  // nop
};

const removeEventListener: removeEventListenerType = () => {
  // nop
};

const removeAllListeners: removeAllListenersType = (): void => {
  // nop
};

const setCheckInterval: setCheckIntervalType = () => {
  // nop
};

const silentListener: silentListenerType = {
  addEventListener,
  removeEventListener,
  removeAllListeners,
  setCheckInterval,
};

export default silentListener;
