import { View,  StyleSheet, Image   } from 'react-native';

const App = () => {
   
  return (
    <View style={styles.container}>
      <Image  
      resizeMode='cover'
        style={{
          width: "100%",
          height: 180,
          borderWidth: 2,
          borderColor: "red",
        }}
        source= {{
          uri: "https://media.istockphoto.com/id/1314099040/photo/stockholm-old-town-city-skyline-cityscape-of-sweden.jpg?s=612x612&w=0&k=20&c=5a5-tABYidmPdgAGqz3LK0b0DUx9E67zTZqqj47rgDs="
        }}
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});



export default App;
