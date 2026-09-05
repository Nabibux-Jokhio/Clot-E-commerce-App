import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login/LoginScreen";
import CreateAccount from "../screens/auth/createAccount/CreateAccount";
import ForgotPassword from "../screens/auth/forgotPassword/ForgotPassword";
import ConfirmEmail from "../screens/auth/confirmEmail/ConfirmEmail";


const Stack = createNativeStackNavigator()

function AuthNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        </Stack.Navigator>
    )
}

export default AuthNavigation