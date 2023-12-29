import { View, Text, StyleSheet, Button, TouchableOpacity,  TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

const App = () => {
    const handleClick = () => {
      alert("Merhaba");
    };



  return (
    <View style={styles.container}>
      <Button title="Click Button" onPress={handleClick} />
        <TouchableOpacity onPress={handleClick}>
            <Text>Click TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="yellow"
            onPress={() => alert("Pressed!")}

        >
          <Text>Click TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
          <Text>Click TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>

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
