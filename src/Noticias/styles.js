import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },

  eventosContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },

  eventoItem: {
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
