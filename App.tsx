import { StyleSheet, View } from "react-native";
import TemperaturaScreen from "./src/presentation/Screens/TemperaturaScreen";
import HexadecimalesScreen from "./src/presentation/Screens/HexadecimalesScreen";




function App(): React.JSX.Element {
  return (
    <View style={style.container}>
      <TemperaturaScreen/>
      {/*<HexadecimalesScreen/>*/}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;