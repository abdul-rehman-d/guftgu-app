import { View } from "react-native";
import { IconButton } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQueryClient } from "react-query";

function GetStarted({}: NativeStackScreenProps<
  RootStackParamsList,
  "OnBoarding"
>) {
  const queryClient = useQueryClient();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        icon="home"
        onPress={async () => {
          await Promise.all([
            AsyncStorage.setItem("@token", "12345"),
            AsyncStorage.setItem("@user", '{"name":"Aaraf"}'),
          ]);
          queryClient.invalidateQueries("auth");
        }}
      />
    </View>
  );
}

export default GetStarted;
