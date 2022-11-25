import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DeportesScreen from '../MyScreens/SigScreen';
import HomeScreen from '../MyScreens/InicioScreen';
import TvScreen from '../MyScreens/StackScreen';
import TecnologiaScreen from '../MyScreens/SuggScreen';
import ViajesScreen from '../MyScreens/ViajesScreen';
import EntretenimientoScreen from '../MyScreens/EntreteniScreen';
import Ionicos from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
  screenOptions={{
    headerTintColor: '#55F5FF',
    drawerActiveTintColor: '#55F5FF',

    headerStyle: {
      backgroundColor: '#000000',
    },
    drawerStyle: {
backgroundColor: '#828282',
    },
  }}
>
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Deportes" component={DeportesScreen} />
        <Drawer.Screen name="Tv" component={TvScreen} />
        <Drawer.Screen name="Tecnologia" component={TecnologiaScreen} />
        <Drawer.Screen name="Viajes" component={ViajesScreen} />
        <Drawer.Screen name="Entretenimiento" component={EntretenimientoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}