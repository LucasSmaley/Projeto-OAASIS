import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  formTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: "blue",
    margin: 10,
  },

  formInput: {
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: "80%",
    padding: 10,
    margin: 10,
  },

  formButton: {
    backgroundColor: "blue",
    width: "80%",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },

  subButton: {
    padding: 10,
  },

  subTextButton: {
    color: "blue",
  },

  monthPlan: {
    width: "90%",
    backgroundColor: "blue",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
  },

  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  },

  subtitle: {
    color: 'blue',
    fontSize: 13,
    marginBottom: 15,
    fontWeight: 'bold', 
    color: '#888', 
  },
  
  topicContainer: {
    marginBottom: 15,
  },

  subtopicContainer: {
    marginBottom: 15,
  },

  topic: {
    color:'#000',
    fontWeight: '600',
  },
});
