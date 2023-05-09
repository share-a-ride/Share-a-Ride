import { View, Text } from "react-native";
import * as TalkRn from "@talkjs/expo";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

const ChatBox = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [user, setUser] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/users/currentUser", {
        headers: { access_token: await AsyncStorage.getItem("access_token") },
      });
      console.log(data, "ini data");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const me = {
    id: user.id,
    name: user.name,
    email: user.email,
    photoUrl: user.image,
    welcomeMessage: "Hey there! How are you? :-)",
    role: "default",
  };

  const other = {
    id: item?.id,
    name: item?.user,
    email: item.email,
    photoUrl: item?.photo,
    welcomeMessage: "Hey, how can I help?",
    role: "default",
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other)
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <TalkRn.Session appId="t1zjwZwi" me={me}>
      <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
    </TalkRn.Session>
  );
};

export default ChatBox;
