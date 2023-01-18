import { StyleSheet, StatusBar, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: 51.2538,
    longitude: -123.1207,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const localizacao = {
    latitude: 37.563936,
    longitude: -116.85123,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} // apenas android
          mapType="satellite" // opções: satellite, hybrid, standard
          userInterfaceStyle="dark" // somente IOS
          maxZoomLevel={15}
          minZoomLevel={4}
        >
          <Marker
            draggable
            title="Mira aqui!"
            coordinate={localizacao}
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
          />
        </MapView>
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
