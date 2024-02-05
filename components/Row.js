import React from "react";
import { Text, View } from "react-native";

export default function Row({person}) {
    return (
      <View>
        <Text>{person.firstname}, {person.lastname}</Text>
        <Text>{"\n"}</Text>
      </View>
    );
}