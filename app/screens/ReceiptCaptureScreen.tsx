import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import { colors, spacing, fonts } from "../styles/theme"; // Use your theme file for consistency
import { useNavigation } from "@react-navigation/native";

const ReceiptCapture = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://example.com/receipt-preview.jpg" }}
          style={styles.image}
        />
      </View>

      <View style={styles.instructionContainer}>
        <Title style={styles.title}>Capture Your Receipt</Title>
        <Subheading style={styles.subheading}>
          Make sure the receipt is clear and all text is visible.
        </Subheading>
      </View>

      <Button
        mode="contained"
        style={styles.captureButton}
        onPress={() => alert("Capture Receipt")}
      >
        Capture Receipt
      </Button>

      <Button
        mode="outlined"
        style={styles.uploadButton}
        onPress={() => alert("Upload Receipt")}
      >
        Upload Receipt
      </Button>
      <Button onPress={() => navigation.navigate("Tax Report")}>
        Go to Tax Report
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: spacing.medium,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 200,
    borderRadius: 10,
    marginBottom: spacing.medium,
  },
  instructionContainer: {
    alignItems: "center",
    marginBottom: spacing.medium,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.textPrimary,
  },
  subheading: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    marginTop: spacing.small,
  },
  captureButton: {
    marginTop: spacing.medium,
    borderRadius: 8,
  },
  uploadButton: {
    marginTop: spacing.small,
    borderRadius: 8,
  },
});

export default ReceiptCapture;
