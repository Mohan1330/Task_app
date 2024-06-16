import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react';



const TaskImage = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',gap:10,}}>
      <ImageBackground style={{width:300,height:300,}}
      source={require("../assets/images/Task.png")}
      />
      <Text style={styles.taskText}>
        Add your Task Here...
      </Text>
    </View>
  )
}

export default TaskImage;
const styles = StyleSheet.create({
    taskText:{
        fontSize:17,
        fontFamily:'Poppins-Light',


    },
})
