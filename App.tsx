import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ThemeProvider,
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { StyleSheet, View } from "react-native";

// See the "Defining Your Theme" readme section below
import theme, { Theme } from "./theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>
>([createVariant({ themeKey: "cardVariants" })], Box);

const Welcome = () => {
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      paddingVertical="xl"
      paddingHorizontal="m"
    >
      <Text variant="header">Welcome</Text>
      <Box
        flexDirection={{
          phone: "column",
          tablet: "row",
        }}
      >
        <Card margin="s" variant="secondary">
          <Text variant="body">This is a simple example</Text>
        </Card>
        <Card margin="s" variant="primary">
          <Text variant="body">Displaying how to use Restyle</Text>
        </Card>
      </Box>
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
