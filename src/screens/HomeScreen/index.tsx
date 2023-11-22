import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";

function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamsList, "Home">) {
  useEffect(() => {
    navigation.setOptions({
      title: "Guftgu",
    });
  }, []);

  return (
    <Card>
      <Card.Content>
        <Title>{"Hello"}</Title>
        <Paragraph>{"wjdkwdjkwjk"}</Paragraph>
      </Card.Content>
    </Card>
  );
}

export default HomeScreen;
