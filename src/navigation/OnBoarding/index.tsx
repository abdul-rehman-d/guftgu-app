import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted } from "../../screens/OnBoardingScreens";

const Stack = createNativeStackNavigator();

function OnBoardingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default OnBoardingStack;
