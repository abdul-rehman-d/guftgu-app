import { ReactNode, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";

import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import type {
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";
import { useWindowDimensions } from "react-native";

type SceneProps = SceneRendererProps & {
  route: {
    key: string;
    title: string;
  };
};

function ChatsTab({}: SceneProps): ReactNode {
  return <></>;
}
function StatusTab(): ReactNode {
  return <></>;
}
function CallsTab(): ReactNode {
  return <></>;
}

const renderScene = SceneMap({
  chats: ChatsTab,
  status: StatusTab,
  calls: CallsTab,
});

function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamsList, "Home">) {
  const layout = useWindowDimensions();
  const theme = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "chats", title: "Chats" },
    { key: "status", title: "Updates" },
    { key: "calls", title: "Calls" },
  ]);

  useEffect(() => {
    navigation.setOptions({
      title: "Guftgu",
      headerShadowVisible: false,
    });
  }, []);

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => {
        return (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.colors.primary }}
            style={{ backgroundColor: theme.colors.background }}
            inactiveColor={theme.colors.secondary}
            activeColor={theme.colors.primary}
          />
        );
      }}
    />
  );
}

export default HomeScreen;
