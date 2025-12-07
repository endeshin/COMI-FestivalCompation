import { StyleSheet, Text, View } from 'react-native';

export default function FestivalScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>List of all available Festivals:</Text>
      <Text style={styles.text}>Current country: The Netherlands</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(21, 21, 97)',
    alignItems: 'center',
    flex: 1,

    resizeMode: 'contain',
    paddingTop: '25%'
  },
  header: {
    color: 'white',
    fontWeight: 800,
    fontSize: 25
  },
  map: {
    flex: 1,
    marginTop: '10%',
    marginBottom: '10%',
    backgroundColor: 'black'

  },
  text: {
    margin: 0,
    color: 'white',
    fontSize: 15
  }
});


// <GoogleMaps.View
//          style={StyleSheet.absoluteFill}
//          cameraPosition={{
//            coordinates: {
//              latitude: 37.8199,
//              longitude: -122.4783
//            },
//            zoom: 12
//          }}
//        />