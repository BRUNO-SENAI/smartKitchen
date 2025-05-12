import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import CafeDaManha from './src/screens/CafeDaManha';
import Drinks from './src/screens/Drinks';
import Sobremesas from './src/screens/Sobremesas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="CafeDaManha" component={CafeDaManha} options={{ title: 'Café da Manhã' }} />
        <Stack.Screen name="Drinks" component={Drinks} options={{ title: 'Drinks' }} />
        <Stack.Screen name="Sobremesas" component={Sobremesas} options={{ title: 'Sobremesas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
