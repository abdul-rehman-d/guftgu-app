import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

import useAuth from "../hooks/auth";
import { HomeScreen } from "../screens";
import OnBoardingStack from "./OnBoarding";
import { useTheme } from "react-native-paper";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStack: React.FC<{}> = ({}) => {
  const { data: authData, isLoading } = useAuth();

  const theme = useTheme();

  const isLoggedIn = authData?.isLoggedIn;

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      {isLoggedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="OnBoarding" component={OnBoardingStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
