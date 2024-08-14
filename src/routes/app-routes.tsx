import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Home} from '../screens/Home';
import {SignInAdm} from '../screens/SignInAdm';
import {SignInClient} from '../screens/SignInClient';
import {SignUpAdm} from '../screens/SignUpAdm';
import {SignUpClient} from '../screens/SignUpClient';
import {Menu} from '../screens/Menu';
import {Details} from '../screens/Details';
import {Cart} from '../screens/Cart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  const {COLORS, FONT_SIZE} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: COLORS.GRAY_3,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Cardápio',
          tabBarIcon: () => (
            <Icon name="restaurant-menu" color="gray" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Meus Pedidos',
          tabBarIcon: () => <Icon name="request-page" color="gray" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'auto',
        statusBarTranslucent: true,
        statusBarColor: 'transparent',
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="adm" component={SignInAdm} />
      <Stack.Screen name="client" component={SignInClient} />
      <Stack.Screen name="signupadm" component={SignUpAdm} />
      <Stack.Screen name="signupclient" component={SignUpClient} />
      <Stack.Screen name="menu" component={TabRoutes} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="cart" component={TabRoutes} />
    </Stack.Navigator>
  );
}
