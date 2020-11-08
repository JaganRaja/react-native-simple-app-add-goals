//JK
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log("courseGoals",courseGoals);

  const addGoalHandler = (goalTitle) => {
    //console.log(enteredGoal); we could see the value in console
    //setCourseGoals([...courseGoals, enteredGoal]); it is NOT 100% guarantee that it will fetch all current values..so use below
    // anonymous fn that will give the existing values
    //setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setCourseGoals((currentGoals) => [...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }]);

      setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals((currentGoals) => {
     return currentGoals.filter((goal) => goal.id !== goalId )
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Button title="Add New Goal" onPress={() => setIsAddMode(true) } />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
      {/* list of goals  */}
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          // <View style={styles.listItem}>
          //   <Text>{itemData.item.value}</Text>
          // </View>
          <GoalItem 
            title={itemData.item.value} 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});


