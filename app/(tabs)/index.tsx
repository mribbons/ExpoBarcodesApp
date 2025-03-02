import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { CameraView, useCameraPermissions, BarcodeScanningResult } from 'expo-camera'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef } from 'react';
import BarcodeOutline from '@/components/BarcodeOutline';
import Grid from '@/components/Grid';

export default function HomeScreen() {

  const [barcode, setBarcode] = useState<BarcodeScanningResult | undefined>(undefined);
  const onBarcodeScanned = (data: BarcodeScanningResult) => {
    setBarcode(data);
  }

  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedText>Requesting permission...</ThemedText>
      </SafeAreaView>
    )
  } 
  
  if (!permission.granted) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <ThemedText>Permission not granted</ThemedText>
          <Button onPress={requestPermission} title="Grant permission" />
        </View>
      </SafeAreaView>
    )
  }


  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} onBarcodeScanned={onBarcodeScanned} />
      {barcode && <BarcodeOutline barcodeEvent={barcode} />}
      <Grid />
    </View>
  );
}
