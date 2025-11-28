import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
// Assests
import "../../assets/images/location-pin.png";


export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Testing</Text>
      <Image source={require('../../assets/country_map/NL/netherlands_base.svg')} style={styles.map}/>
      <Link href="/festival" style={styles.link} asChild>
        <Pressable>
          <Image source={require('../../assets/images/location-pin.png')} style={styles.pin} />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#151561',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    color: 'white'
  },
  pin: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  link: {
    width: 50,
    height: 50,
    marginTop: 20,
  },
  map: {
    flex: 1,
    margin: '0%',
    width: '40%',
    resizeMode: 'contain'
  },
});
