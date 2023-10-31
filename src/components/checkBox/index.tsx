import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface CheckBoxProps {
  checked: boolean;
  setChecked: () => void;
}

export function CheckBox({ checked, setChecked }: CheckBoxProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={setChecked}>
      {checked ? (
        <Image
          source={require("../../../assets/checkboxTrue.png")}
          style={styles.imageCheckbox}
        />
      ) : (
        <Image
          source={require("../../../assets/chekboxFalse.png")}
          style={styles.imageCheckbox}
        />
      )}
    </TouchableOpacity>
  );
}
