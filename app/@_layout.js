import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="basicInfo"
        options={{
          headerTitle: " ",
          headerBackTitle: "Back",
        }}
      />

      <Stack.Screen
        name="screens"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
