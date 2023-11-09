import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

import useAuth from "../hooks/auth";
import { HomeScreen } from "../screens";
import OnBoardingStack from "./OnBoarding";

const Stack = createNativeStackNavigator();

const RootStack: React.FC<{}> = ({}) => {
  const { data: authData, isLoading } = useAuth();

  const isLoggedIn = authData?.isLoggedIn;

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="OnBoarding" component={OnBoardingStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
