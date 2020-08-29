# react-native-silent-listener

Library for listen when user enable or disable silent mode

## Installation

```sh
npm install react-native-silent-listener
cd ios && pod install
```

## Usage

```js
import SilentListener from 'react-native-silent-listener';

// ...

SilentListener.setCheckInterval(2);

const onMuteChange = (nextVal) => {
  //
};

SilentListener.addEventListener(onMuteChange);
SilentListener.removeEventListener(onMuteChange);
SilentListener.removeAllListeners();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
