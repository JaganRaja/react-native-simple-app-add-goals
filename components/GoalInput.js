import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const AddingGoalHandler = () => {
        props.onAddGoal(enteredGoal); //here, bind is not needed
        setEnteredGoal("");
    }
    
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                {/* passing the input value through function while clicking on button...
                It can be achieved in the below two ways
                1. anonymous function
                2. bind */}
                {/* 1. */}
                {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} /> */}
                {/* 2. */}
                {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={AddingGoalHandler} /></View>
                </View>
                
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: "row",
        flex: 1, // View to take the full available space (OR what its parents gives), else view occupies only what its child needs 
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
      },
      buttonContainer: {
          flexDirection: "row",
          justifyContent: "space-around",
          width: "60%"
      },
      button: {
          width: '40%'
      }
});

export default GoalInput;
