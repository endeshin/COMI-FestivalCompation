import { Image, StyleSheet, Text, View } from 'react-native';

export default function FestivalScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Testing festival</Text>
      <Image source={require('../../assets/images/testing-route.png')} resizeMode='contain' style={styles.map}/>
      <Text style={styles.cat}>Music festival</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(21, 21, 97)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'left'
  },
  header: {
    color: 'white',
    fontWeight: 800,
    fontSize: 25
  },
  map: {
    marginTop: 10,
    marginBottom: 10,
    width: 365

  },
  cat: {
    margin: 0,
    color: 'white',
    fontSize: 15,
  }
});


// Made for google maps - needed API key - needed card info!
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