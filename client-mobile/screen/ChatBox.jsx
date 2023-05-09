import { View, Text } from 'react-native'
import * as TalkRn from '@talkjs/expo';
import React, { useLayoutEffect, useState } from "react";
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
  const [user, setUser] = useState({
    id:"9876",
    name: "John Doe",
    email: 'jhon@example.com',
    image:"https://cdn.medcom.id/dynamic/content/2019/06/04/1029348/uPzxU4aEhF.jpg?w=700",
    address: "jl.jendral ahmad yani no.10",
    phoneNumber:"876546889",
    rating:4.5,
    review:142,
  });
 


  const me = {
    id: user.id,
    name: user.name,
    email: user.email,
    photoUrl: user.image,
    welcomeMessage: 'Hey there! How are you? :-)',
    role: 'default',
  };

  const other = {
    id: item?.id,
    name: item?.user,
    email: 'Sebastian@example.com',
    photoUrl: item?.image,
    welcomeMessage: 'Hey, how can I help? https://google.com',
    role: 'default',
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other)
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);

  return (
    <TalkRn.Session appId='t1zjwZwi' me={me}>
      <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
    </TalkRn.Session>
  );
}

export default ChatBox