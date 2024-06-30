import { useIntoleranceStore } from "@/app/stores/intolerance";
import {
  Intolerance,
  IntoleranceKey,
} from "@/app/stores/intolerance/Intolerance";
import CheckBox from "expo-checkbox";
import { View, StyleSheet, Text } from "react-native";

const INTOLERANCE_LIST = [
  Intolerance.create({
    key: IntoleranceKey.Lactose,
    name: "Lactose Intolerance",
    category: "Carbohydrate",
    description: "Found in dairy products.",
    allergens: ["Milk"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Fructose,
    name: "Fructose Intolerance",
    category: "Carbohydrate",
    description:
      "Found in certain fruits, honey, and high-fructose corn syrup.",
    allergens: ["Fruits", "Honey"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Sorbitol,
    name: "Sorbitol Intolerance",
    category: "Carbohydrate",
    description: null,
    allergens: ["Fruits", "Sugar-free Products"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Sucrose,
    name: "Sucrose Intolerance",
    category: "Carbohydrate",
    description: null,
    allergens: ["Table Sugar"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Casein,
    name: "Casein Intolerance",
    category: "Protein",
    description: null,
    allergens: ["Milk"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Gluten,
    name: "Gluten Intolerance",
    category: "Protein",
    description: null,
    allergens: ["Wheat", "Barley", "Rye"],
  }),
  Intolerance.create({
    key: IntoleranceKey.SoyProtein,
    name: "Soy Protein Intolerance",
    category: "Protein",
    description: null,
    allergens: ["Soy"],
  }),
  Intolerance.create({
    key: IntoleranceKey.EggProtein,
    name: "Egg Protein Intolerance",
    category: "Protein",
    description: null,
    allergens: ["Egg"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Histamine,
    name: "Histamine Intolerance",
    category: "Other",
    description: null,
    allergens: ["Aged Cheeses", "Fermented Foods", "Processed Meats"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Salicylate,
    name: "Salicylate Intolerance",
    category: "Other",
    description: null,
    allergens: ["Fruits", "Vegetables", "Herbs"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Tyramine,
    name: "Tyramine Intolerance",
    category: "Other",
    description: null,
    allergens: ["Aged Cheeses", "Cured Meats", "Fermented Foods"],
  }),
  Intolerance.create({
    key: IntoleranceKey.MSG,
    name: "MSG Intolerance",
    category: "Other",
    description: null,
    allergens: ["Asian Cuisine", "Processed Foods"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Fructans,
    name: "Fructans Intolerance",
    category: "FODMAP",
    description: "Found in wheat, onions, garlic, and other foods.",
    allergens: ["Wheat", "Onions", "Garlic"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Galactans,
    name: "Galactans Intolerance",
    category: "FODMAP",
    description: "Found in legumes.",
    allergens: ["Legumes"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Polyols,
    name: "Polyols Intolerance",
    category: "FODMAP",
    description:
      "Sugar alcohols found in certain fruits and used as sweeteners (e.g., sorbitol, mannitol, xylitol).",
    allergens: ["Sugar Alcohols"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Caffeine,
    name: "Caffeine Intolerance",
    category: "Specific",
    description: null,
    allergens: ["Coffee", "Tea", "Chocolate"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Alcohol,
    name: "Alcohol Intolerance",
    category: "Specific",
    description: null,
    allergens: ["Alcoholic Beverages"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Yeast,
    name: "Yeast Intolerance",
    category: "Specific",
    description: null,
    allergens: ["Baked Goods", "Brewing Products"],
  }),
  Intolerance.create({
    key: IntoleranceKey.RedMeat,
    name: "Red Meat Intolerance",
    category: "Notable",
    description: null,
    allergens: ["Red Meat"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Shellfish,
    name: "Shellfish Intolerance",
    category: "Notable",
    description: null,
    allergens: ["Shellfish"],
  }),
  Intolerance.create({
    key: IntoleranceKey.Nightshade,
    name: "Nightshade Intolerance",
    category: "Notable",
    description: null,
    allergens: ["Tomatoes", "Potatoes", "Eggplants", "Peppers"],
  }),
];

export const IntoleranceList = () => {
  const { intolerancies, toggle } = useIntoleranceStore();

  return (
    <View>
      {INTOLERANCE_LIST.map((i) => (
        <View key={i.key} style={styles.checkboxContainer}>
          <CheckBox
            value={intolerancies.includes(i.key)}
            onValueChange={() => toggle(i.key)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{i.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
