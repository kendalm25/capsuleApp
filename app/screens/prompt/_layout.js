import { Stack } from "expo-router";

export default function StackLayoutPrompt() {
  return (
    <Stack>
      <Stack.Screen
        name="viewprompt"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="submitted"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
