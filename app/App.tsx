import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReceiptCaptureScreen from "./screens/ReceiptCaptureScreen";
import TaxReportScreen from "./screens/TaxReportScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Receipt Capture">
        <Stack.Screen name="Receipt Capture" component={ReceiptCaptureScreen} />
        <Stack.Screen name="Tax Report" component={TaxReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
