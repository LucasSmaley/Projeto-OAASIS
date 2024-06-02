import { StyleSheet } from 'react-native';
import {Dimensions} from "react-native";

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

  clicaImg:{

    width: '100%',
  },

  img:{

    borderRadius: 10,
    width: '100%',
    height: 250,
  },


  informativosContainer: {

    textAlign: 'justify',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
