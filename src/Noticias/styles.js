import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 20,
  },

  eventosContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
  },

  eventoItem: {
    padding: 10,
    fontSize: 16,
    margin: 10,
    borderWidth: 1, 
    borderColor: "#cbf3f0", 
    borderRadius: 5,
    color: "#024059",
  },

  input: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: "blue",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
