import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import UIButton from "@/components/ui/Button";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top + Spacing.three,
        },
      ]}
    >
      <Text style={{ color: theme.text }}>LiveLift</Text>

      <Text style={{ color: theme.text, paddingTop: 100 }}>
        Нажмите для старта тренировки
      </Text>

      <UIButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: Spacing.three },
});
