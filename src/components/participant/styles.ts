import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 0.3,
    borderColor: "#727272",
    backgroundColor: "#262626",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    fontSize: 15,
    color: "#F2F2F2",
  },
  textStrikethrough: {
    color: "#727272",
    textDecorationLine: "line-through",
  },
  button: {
    height: 60,
    width: 60,
    padding: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
