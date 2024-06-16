import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
// import {useEffect} from 'react';
import {
  FAB,
  PaperProvider,
  Portal,
  Modal,
  Card,
  Avatar,
  IconButton,
  Button,
} from 'react-native-paper';
import {TextInput} from 'react-native';
import {colors} from '../theme.ts';
import TaskImage from './TaskImage.js';

const HomeScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [text, onChangeText] = React.useState('');
  const [task, setTask] = React.useState([]);
  // model show:
  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);
  // Task Edit State:
  const [editTask, setEditTask] = useState();

  // task Delete todos:
  const handleTaskDelete = index => {
    // const updatedTask = task.filter(text => text.id !== id);
    // setTask(updatedTask);

    let updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };

  // Task Edit todos:
  const handleTaskEdit = text => {
    setEditTask(text);
    editTask(text);
  };

  const containerStyle = {
    backgroundColor:'#fff',
    padding: 50,
    gap: 30,
  };

  const AddTask = () => {
    if(text != ''){
      setTask(current => [...current, text]);
      onChangeText(false);
      setVisible(false);
    }
    else{
      Alert.alert('Add Task')
    }
    
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.Header}>TASK</Text> */}
      {task.length <= 0 && <TaskImage />}
      <FAB icon="plus" style={styles.icon} color={'#fff'} onPress={showModal} />
      <FlatList
        style={{flex: 1, width: '100%', padding: 10}}
        data={task}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <Text style={styles.listText}>{item}</Text>
              {/* <IconButton
                icon="pencil"
                iconColor="#fff"
                onPress={() => handleTaskEdit}
              /> */}
              <IconButton
                icon="trash-can"
                iconColor="#FF8989"
                onPress={() => handleTaskDelete(index)}
              />
            </View>
          );
        }}></FlatList>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={{gap: 20,}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              // value={text}
              placeholder="Add Task Here"
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={AddTask}>
              <Text style={{alignItems:'center',justifyContent:'center',fontSize:20,color:'#fff',fontFamily:'Poppins-Light'}}>Add</Text>
            </TouchableOpacity>
            {/* <Button
              icon="plus"
              mode="contained-tonal"
              textColor='#fff'
              buttonColor='#ADC4CE'
              onPress={AddTask}>
              
              Add
            </Button> */}
            {/* <Button title="add" onPress={AddTask} style={styles.Button} /> */}
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    backgroundColor:colors.primary,
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  Header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: colors.primary,
  },
  Button: {
    width: '30%',
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 10,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'center',
  
    
  },


  input: {
    padding: 10,
    backgroundColor:'#efefef',
    borderRadius: 15,
    borderColor:'red',
    fontFamily:'Poppins-Light',

  },
  listText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    flex: 1,
  },
  listContainer: {
    width: '100%',
    backgroundColor: '#008170',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
