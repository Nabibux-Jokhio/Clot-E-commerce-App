import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login/LoginScreen";
import LoginPasswordScreen from "../screens/auth/login/LoginPasswordScreen";
import CreateAccount from "../screens/auth/createAccount/CreateAccount";
import ForgotPassword from "../screens/auth/forgotPassword/ForgotPassword";
import ConfirmEmail from "../screens/auth/confirmEmail/ConfirmEmail";
import InformationScreen from "../screens/auth/informationScreen/InformationScreen";

const Stack = createNativeStackNavigator()

function AuthNavigation(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="LoginPasword" component={LoginPasswordScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="InformationScreen" component={InformationScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigation