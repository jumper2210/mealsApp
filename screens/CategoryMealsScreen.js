import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        image={itemData.item.imagUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100&" }}
      />
    </View>
  );
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.getParams("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default CategoryMealsScreen;
