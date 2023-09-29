import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

const SetupAccountForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordControl, setPasswordControl] = useState("");
  const [age, setAge] = useState("");
  const [carOwner, setCarOwner] = useState("");
  const [mainSkills, setMainSkills] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <View>
      <Text>Fromularz do zakladania konta</Text>
      <TextInput
        placeholder="Imię"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        placeholder="Nazwisko"
        onChangeText={(text) => {
          setLastName(text);
        }}
        value={lastName}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        value={email}
      />
      <TextInput
        placeholder="Hasło"
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
      />
      <TextInput
        placeholder="Powtórz hasło"
        onChangeText={(text) => {
          setPasswordControl(text);
        }}
        value={passwordControl}
      />
      <TextInput
        placeholder="Wiek"
        onChangeText={(text) => {
          setAge(text);
        }}
        value={age}
      />
      <TextInput
        placeholder="Twoje umiejętności"
        onChangeText={(text) => {
          setMainSkills(text);
        }}
        value={mainSkills}
      />
      <TextInput
        placeholder="Czy posiadasz samochód?"
        onChangeText={(text) => {
          setCarOwner(text);
        }}
        value={carOwner}
      />
      <View>
        <Button title="Zapisz" onPress={() => setDisplay(true)} />
      </View>
      <View>
        {display ? (
          <View>
            <Text>{name}</Text>
            <Text>{lastName}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SetupAccountForm;
