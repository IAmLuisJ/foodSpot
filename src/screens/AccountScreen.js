import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";
const AccountScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button onPress={signOut}>Sign out</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    margin: 15,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={20} />,
  };
};

export default AccountScreen;
