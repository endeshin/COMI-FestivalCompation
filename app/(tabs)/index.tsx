import { Image, ImageBackground } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
// Assests
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import "../../assets/images/location-pin.png";


export default function HomeScreen() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.body} edges={['left', 'right']}>
      <Text style={styles.header}>Festivals in The Netherlands</Text>
      <ImageBackground source={require('../../assets/country_map/NL/netherlands_base.svg')} style={styles.map} resizeMode='contain'>
        <Link href="/fest" style={styles.link} asChild>
          <Pressable>
            <Image source={require('../../assets/images/location-pin.png')} style={styles.pin} resizeMode='contain'/>
          </Pressable>
        </Link>
      </ImageBackground>
      <Link href='/festivals'>
        <Pressable>
          <Text>See all available festivals</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#151561',
    alignItems: 'center',
    textAlign: 'left',
    flex: 1,
  },
  header: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 25,
    marginTop: '30%',
  },
  pin: {
    flex: 1,

    width: 25,
  },
  link: {
    flex: 1,
    width: '5%',
    marginTop: 20,
    marginLeft: 70
  },
  map: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    marginTop: '0%',
  },

  
});
