import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <Text style={styles.header}>Hello there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'rgb(5,5,90)',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    color: 'white'
  }
});
