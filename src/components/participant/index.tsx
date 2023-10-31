import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CheckBox } from "../checkBox";
import { useState } from "react";

interface ParticipantProps {
  name: string;
  handleRemoveParticipant: () => void;
}

export function Participant({
  name,
  handleRemoveParticipant,
}: ParticipantProps) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox checked={checked} setChecked={() => setChecked(!checked)} />
      <Text style={[styles.text, checked && styles.textStrikethrough]}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
