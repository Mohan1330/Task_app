import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useEffect,useCallback} from 'react';
import {FAB, List, ActivityIndicator} from 'react-native-paper';
import {colors} from '../theme.ts';
import {SearchBar} from 'react-native-screens';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { RefreshControl } from 'react-native-gesture-handler';

const Api = () => {
  const [data, setData] = useState(undefined);
  // Loacing
  const [isLoading, setIsLoading] = useState(true);

  //   search bar State:
  const [searchText, setsearchText] = useState('');

  // Refresh control:
  const [refresh,setRefresh] = useState(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(()=> {
      setRefresh(false);
    },2000)
  },[])

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    setIsLoading(false);
  };
  useEffect(() => {
    getApiData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#00968a" />
        <Text>Loading....</Text>
      </View>
    );
  }

  const handleSearch = searchText => {
    setsearchText(searchText);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.SearchBar}
        placeholder="Search"
        onChangeText={text => setsearchText(text)}
        value={searchText}
      />

      <FlatList
        style={{flex: 1, width: '100%', padding: 20}}
        data={filteredData}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh}/>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.listContainer}>
              <List.Item
              style={{flex:1,fontFamily:'Poppins-Light',alignSelf:"center",backgroundColor:'white'}}
                // description={item.title}
                title={item.title}
                titleStyle={{alignContent:'center',marginTop:-2,fontFamily:'Poppins-Light'}}
                left={props => <List.Icon {...props} size={12} icon='calendar'style={{alignItems:'center',paddingLeft:10.}} />}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  listContainer: {
    flex:1,
    width: '100%',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  listText: {
    // fontWeight: 'bold',
    fontSize: 15,
    color: '#F45050',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Poppins-Light',
  },
  activityIndicator: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SearchBar: {
    // paddingHorizontal:20,
    marginTop: 10,
    paddingLeft: 15,
    // paddingVertical:10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
    width: '90%',
    fontFamily: 'Poppins-Light',
  },
});

export default Api;
