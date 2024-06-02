import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: '#12B6B4',
  },

  proj:{

    width: 200,
    height: 200,
    borderRadius: 100,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },

  informativosContainer: {

    textAlign: 'justify',
    color: 'white',
    fontWeight: 'bold',
  },

  eventoItem: {
    fontSize: 16,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },

  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
