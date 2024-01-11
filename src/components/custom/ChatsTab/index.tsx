import React from "react";
import type { ReactNode } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import dayjs from "dayjs";

import type { SceneProps } from "../../../types/tabs";

function formatDate(date: Date): string {
  const now = dayjs();
  const targetDate = dayjs(date);

  if (targetDate.isSame(now, "day")) {
    return targetDate.format("h:mm A");
  } else if (targetDate.isAfter(now.subtract(7, "day"))) {
    return targetDate.format("dddd"); // 'dddd' gives the full weekday name
  } else {
    return targetDate.format("DD/MM/YY");
  }
}

const renderItem = ({ item, index }: { item: Chat; index: number }) => {
  return (
    <TouchableRipple
      rippleColor="rgba(0, 0, 0, .2)"
      onPress={() => {}}
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
      }}
    >
      <>
        <View>
          <Image
            source={{ uri: item.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
        </View>
        <View style={{ flex: 1, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{item.name}</Text>
            <Text>{formatDate(item.lastMessage.createdAt)}</Text>
          </View>
          <View>
            <Text>{item.lastMessage.text}</Text>
          </View>
        </View>
      </>
    </TouchableRipple>
  );
};

type Message = {
  _id: string;
  text: string;
  createdAt: Date;
};

type Chat = {
  _id: string;
  name: string;
  avatar: string;
  lastMessage: Message;
  unread: number;
};

function ChatsTab({}: SceneProps): ReactNode {
  return (
    <FlatList
      data={[
        {
          _id: "1",
          name: "John Doe",
          avatar: "https://picsum.photos/200",
          lastMessage: {
            _id: "1",
            text: "Hello, world!",
            createdAt: new Date(),
          },
          unread: 0,
        },
        {
          _id: "2",
          name: "Jane Doe",
          avatar: "https://picsum.photos/200",
          lastMessage: {
            _id: "1",
            text: "Hello, nice guy!",
            createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
          },
          unread: 0,
        },
        {
          _id: "3",
          name: "john WIck",
          avatar: "https://picsum.photos/200",
          lastMessage: {
            _id: "1",
            text: "Hello, nice guy!",
            createdAt: new Date(new Date().setDate(new Date().getDate() - 10)),
          },
          unread: 0,
        },
      ]}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
}

export default ChatsTab;
