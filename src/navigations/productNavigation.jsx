import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "../screens/productPage/ProductScreen";
import CartScreen from "../screens/cart/CartScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";

const Stack = createNativeStackNavigator();

function ProductNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}

export default ProductNavigation;