export type eventCallback = (newVal: boolean) => void;
export type addEventListenerType = (callback: (val: boolean) => void) => void;
export type removeEventListenerType = (
  callback: (val: boolean) => void
) => void;
export type removeAllListenersType = () => void;
export type setCheckIntervalType = (newInterval: number) => void;

export type silentListenerType = {
  addEventListener: addEventListenerType;
  removeEventListener: removeEventListenerType;
  removeAllListeners: removeAllListenersType;
  setCheckInterval: setCheckIntervalType;
};
