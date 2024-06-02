import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cbf3f0",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  monthPlan: {
    width: "90%",
    backgroundColor: "#00bbf9",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "flex-start",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  },

  subtitle: {
    color: "blue",
    fontSize: 13,
    marginBottom: 15,
    fontWeight: "bold",
    color: "#888",
  },

  topicContainer: {
    marginBottom: 15,
  },

  subtopicContainer: {
    marginBottom: 15,
  },

  topic: {
    color: "#024059",
    fontWeight: "600",
  },
});
