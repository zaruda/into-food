import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Products } from "./types";

export function Camera() {
  const [barcode, setBarcode] = useState<string>();
  const [permission, requestPermission] = useCameraPermissions();

  const [product, setProduct] = useState<Products>();

  const fetchBarcode = async () => {
    if (!barcode) {
      return;
    }

    const response = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${barcode}`
    );
    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    fetchBarcode();
  }, [barcode]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleBarcodeScanned = (barcode: BarcodeScanningResult) => {
    setBarcode(barcode.data);
  };

  const handleReset = () => {
    setBarcode("");
    setProduct(undefined);
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        onBarcodeScanned={barcode ? undefined : handleBarcodeScanned}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{barcode}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Button onPress={handleReset} title="Reset" />
      {product && (
        <View>
          <Image
            source={product.product.image_front_url}
            style={{ width: 300, height: 300 }}
          />
          <Text>Allergens: {product.product.allergens}</Text>
          <Text>
            Allergens from ingredients:{" "}
            {product.product.allergens_from_ingredients}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
