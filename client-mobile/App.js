import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainStack from './navigators/MainStack';

export default function App() {
  return (
   
  <SafeAreaView className="flex-1 relative mt-10">
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
          <MainStack/>
      </GestureHandlerRootView>
    </NavigationContainer>
  </SafeAreaView>
   
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
