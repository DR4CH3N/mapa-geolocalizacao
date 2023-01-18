import { StyleSheet, StatusBar, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 51.2538,
    longitude: -123.1207,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} // apenas android
          mapType="standard" // satellite, hybrid, standard
          userInterfaceStyle="dark" // somente IOS
          maxZoomLevel={15}
          minZoomLevel={4}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
