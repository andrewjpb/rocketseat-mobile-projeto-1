import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../components/participant";

export default function Home() {
  const [text, onChangeText] = useState("Adicione uma nova tarefa");
  const [concluidas, setConcluidas] = useState<number>(0);
  const [participants, setParticipants] = useState<
    {
      name: string;
      id: string;
    }[]
  >([]);

  function handleAddParticipant() {
    if (text) {
      setParticipants((playback) => [
        ...playback,
        { id: (playback.length + 1).toString(), name: text },
      ]);
      onChangeText("");
    }
  }

  function handleRemoveParticipant(id: string) {
    setParticipants((playback) => playback.filter((item) => item.id !== id));
  }

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddParticipant}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resumuTodo}>
          <View style={styles.resumoTodoContainer}>
            <Text style={styles.resumoTodoTextCreate}>Criadas</Text>
            <View style={styles.toagleResumoContainer}>
              <Text style={styles.resumoTodoTextCreateNumber}>
                {participants.length}
              </Text>
            </View>
          </View>
          <View style={styles.resumoTodoContainer}>
            <Text style={styles.resumoTodoTextFinish}>Concluídas</Text>
            <View style={styles.toagleResumoContainer}>
              <Text style={styles.resumoTodoTextCreateNumber}>
                {concluidas}
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          style={{ marginTop: 20, marginBottom: 60 }}
          data={participants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Participant
              name={item.name}
              key={item.id}
              handleRemoveParticipant={() => handleRemoveParticipant(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <View style={styles.hr} />

              <Image
                style={styles.imageEmpty}
                source={require("../../../assets/Clipboard.png")}
              />
              <View style={styles.containerTextEmpty}>
                <Text style={styles.textEmptyBold}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.textEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
