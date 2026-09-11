import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import CategoriesScreen from '../screens/home/CategoryScreen';
import CategoryItem from '../screens/home/CategoryItem';
import CartScreen from '../screens/cart/CartScreen';



const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoriesScreen} />
      <Stack.Screen name="CategoryItem" component={CategoryItem} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
