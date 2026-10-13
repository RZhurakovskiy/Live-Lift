import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors, fonts, spacing } from "../../theme";

const SIZE = 350;

function showAlert(message: string) {
  if (Platform.OS === "web") {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

const UIButton = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>ТРЕНИРОВКА</Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        onPress={() => showAlert("Тренировка начата")}
      >
        <LinearGradient
          colors={["#FF8A1F", "#F03A3A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Старт тренировки</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    gap: spacing.md,
  },
  label: {
    color: colors.textMuted,
    fontFamily: fonts.bold,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },
  button: {
    width: SIZE,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: fonts.bold,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default UIButton;
