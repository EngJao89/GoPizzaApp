import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {SignInAdm} from '../screens/SignInAdm';
import {SignInClient} from '../screens/SignInClient';

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
    </Navigator>
  );
}
