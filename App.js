import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const onAdd = () => {
    setGoals((prevGoals) => {
      return [...prevGoals, {id:Math.random().toString(),value: goal}];
    });
    setGoal('')
  };
  const deleteGoal=id=>{
      setGoals(prevGoals=>{
        return prevGoals.filter(t=>t.id!==id);
      })
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, alignSelf: "center" }}>My Goals</Text>
      <View
        style={{ flexDirection: "row", justifyContent: "center", padding: 30 }}
      >
        <TextInput
          style={{
            flex: 3,
            fontSize: 25,
            borderColor: "black",
            borderWidth: 2,
            marginRight: 10,
            padding: 3,
            paddingLeft: 10,
          }}
          value={goal}
          onChangeText={(e) => setGoal(e)}
        />
        <Button title="Add" onPress={onAdd} />
      </View>
      <FlatList
        style={{width:'80%'}}
        data={goals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>deleteGoal(item.id)}>
          <View style={{padding:10,borderWidth:2,borderColor:'red',margin:10,width:'80%',marginLeft:30}}>
            <Text style={{fontSize:20}}>{item.value}</Text>
         </View>
         </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
});
