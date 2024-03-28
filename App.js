import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './components/splash';
import Login from './components/login';
import MenuTabs from './components/menuTabs';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState('');

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{
              changeStatus: setUser
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}