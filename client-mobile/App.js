import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainStack from './navigators/MainStack';

export default function App() {
  return (
    <NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MainStack/>
    </GestureHandlerRootView>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
