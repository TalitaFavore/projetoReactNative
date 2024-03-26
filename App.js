import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './components/splash';
import Login from './components/login';
import MenuTabs from './components/menuTabs';
import { useState } from 'react';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              changeStatus: (user) => setUser(user)
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    // Aqui você pode retornar o conteúdo da aplicação após o login
    return <MenuTabs />;
  }
}
