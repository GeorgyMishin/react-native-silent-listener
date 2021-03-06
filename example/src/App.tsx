import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SilentListener from 'react-native-silent-listener';

SilentListener?.setCheckInterval(1);

export default function App() {
  const [result, setResult] = React.useState<boolean>(false);

  React.useEffect(() => {
    const onMuteChange = (nextVal: boolean) => {
      setResult(nextVal);
    };

    SilentListener?.addEventListener(onMuteChange);

    return () => {
      SilentListener?.removeEventListener(onMuteChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Silent mode: {`${result}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
