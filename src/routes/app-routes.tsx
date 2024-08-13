import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {SignInAdm} from '../screens/SignInAdm';
import {SignInClient} from '../screens/SignInClient';
import {SignUpAdm} from '../screens/SignUpAdm';
import {SignUpClient} from '../screens/SignUpClient';
import {Menu} from '../screens/Menu';
import {Details} from '../screens/Details';
import {Cart} from '../screens/Cart';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'auto',
        statusBarTranslucent: true,
        statusBarColor: 'transparent',
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />

      <Screen
        name="adm"
        component={SignInAdm}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />

      <Screen
        name="client"
        component={SignInClient}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />

      <Screen
        name="signupadm"
        component={SignUpAdm}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />

      <Screen
        name="signupclient"
        component={SignUpClient}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />

      <Screen
        name="menu"
        component={Menu}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          statusBarStyle: 'auto',
          statusBarTranslucent: true,
          statusBarColor: 'transparent',
        }}
      />
    </Navigator>
  );
}
