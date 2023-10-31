import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 170,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
  },
  container: {
    padding: 40,
    backgroundColor: "#191919",
    flex: 1,
  },
  resumoTodoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  resumoTodoTextCreateNumber: {
    color: "#ffff",
    fontWeight: "bold",
  },
  toagleResumoContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    height: 20,
    width: 20,
    backgroundColor: "#333333",
  },

  title: {
    color: "#ffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  description: {
    color: "#4a4650",
    fontSize: 16,
  },

  form: {
    marginTop: -70,

    flexDirection: "row",
    gap: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e6f9f",
    height: 60,
    width: 60,
    padding: 20,
    borderRadius: 10,
  },
  textButton: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: "#ffff",
    backgroundColor: "#4a4650",
  },
  listParticipants: {
    flexDirection: "column",
    gap: 10,
    marginTop: 40,
  },
  logo: {
    height: 40,
    width: "auto",
    resizeMode: "contain",
  },
  resumuTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  resumoTodoTextCreate: {
    fontSize: 16,
    color: "#4ea8de",
  },
  resumoTodoTextFinish: {
    fontSize: 16,
    color: "#8284fa",
  },
  hr: {
    height: 1,
    width: "100%",
    backgroundColor: "#333333",
    marginTop: 20,
  },
  containerEmpty: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  containerTextEmpty: {
    gap: 5,
    alignItems: "center",
  },
  imageEmpty: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  textEmpty: {
    color: "#808080",
    fontSize: 17,
  },
  textEmptyBold: {
    color: "#808080",
    fontSize: 17,
    fontWeight: "bold",
  },
});
