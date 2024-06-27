import { StyleSheet, View } from "react-native";
import PruebaScreen from "./src/presentation/Screens/PruebaScreen";



function App(): React.JSX.Element {
  return (
    <View style={style.container}>
      <PruebaScreen/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default App;