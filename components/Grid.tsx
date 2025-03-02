import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";

interface GridProps {
  rows?: number; // Number of horizontal lines
  columns?: number; // Number of vertical lines
  color?: string; // Line color
  thickness?: number; // Line thickness
  opacity?: number; // Opacity of the lines
}

const { width, height } = Dimensions.get("window");

const Grid: React.FC<GridProps> = ({
  rows = 10,
  columns = 4,
  color = "rgba(255, 255, 255, 0.5)",
  thickness = 1,
  opacity = 0.5,
}) => {
  const rowSpacing = height / rows;
  const colSpacing = width / columns;

  return (
    <View style={[StyleSheet.absoluteFill, { position: "absolute", pointerEvents: "none" }]}>
      {/* Horizontal Lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => (
        <View
          key={`h-${i}`}
          style={{
            position: "absolute",
            top: i * rowSpacing,
            width: "100%",
            height: thickness,
            backgroundColor: color,
            opacity,
          }}
        />
      ))}

      {/* Vertical Lines */}
      {Array.from({ length: columns + 1 }).map((_, i) => (
        <View
          key={`v-${i}`}
          style={{
            position: "absolute",
            left: i * colSpacing,
            height: "100%",
            width: thickness,
            backgroundColor: color,
            opacity,
          }}
        />
      ))}
    </View>
  );
};

export default Grid;
