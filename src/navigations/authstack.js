import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/login';
import { BottomTabNavigator } from './bottomTabNavigator';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}