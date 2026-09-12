import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../screens/Settings/ProfileScreen'
import AddressScreen from '../screens/Settings/AddressScreen'
import WishlistScreen from '../screens/Settings/WishlistScreen'
import PaymentScreen from '../screens/Settings/PaymentScreen'
import AddAddress from '../screens/Settings/AddAddress'
import AddCard from '../screens/Settings/AddCard'
import FavoriteScreen from '../screens/Settings/FavoriteScreen'






const Stack = createNativeStackNavigator();

function SettingsNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Address" component={AddressScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
