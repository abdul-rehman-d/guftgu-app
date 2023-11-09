import { StatusBar } from "expo-status-bar";
import {
  DefaultTheme as DefaultPaperTheme,
  PaperProvider,
} from "react-native-paper";
import {
  DefaultTheme as DefaultNavigationTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";
import * as SplashScreen from "expo-splash-screen";

import RootStack from "./src/navigation";

const CombinedDefaultTheme = {
  ...DefaultNavigationTheme,
  ...DefaultPaperTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    ...DefaultPaperTheme.colors,
  },
};

const queryClient = new QueryClient();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <RootStack />
          <StatusBar style="dark" />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
