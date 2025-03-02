import { View } from 'react-native'
import { BarcodeScanningResult } from 'expo-camera'
import { ThemedText } from './ThemedText'
interface BarcodeOutlineProps {
  barcodeEvent: BarcodeScanningResult
}

export default function BarcodeOutline({ barcodeEvent }: BarcodeOutlineProps) {
  // draw a rectangle on the screen based on the barcode event
  const { bounds } = barcodeEvent

  return (
    <View
      style={{
        position: 'absolute',
        top: bounds.origin.y,
        left: bounds.origin.x,
        width: bounds.size.width,
        height: bounds.size.height,
        borderWidth: 2,
        borderColor: 'red'
      }}
    >
      <ThemedText>BarcodeOutline</ThemedText>
    </View>
  )
}
