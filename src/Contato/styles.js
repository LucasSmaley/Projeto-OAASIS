import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  background:{

    backgroundColor: '#cbf3f0',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    backgroundColor: '#12B6B4',
    borderRadius: 25,
  },

  contSocial:{

    flexDirection: "row", // Arrange children horizontally
    justifyContent: "space-between", // Space evenly between children
    alignItems: "center", // Align children vertically
    paddingHorizontal: 70, // Add horizontal padding to container
    backgroundColor: '#12B6B4',
    margin: 10,
    padding: 20,
    borderRadius: 25,
  },

  Img:{

    width: 100,
    height: 100,
    borderRadius: 100,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffbf69',
    marginBottom: 20,
  },

  informativosContainer: {

    textAlign: 'justify',
    color: 'white',
    fontWeight: 'bold',
  },

  addButton: {
    backgroundColor: '#00bbf9',
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
