import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/goalitem/GoalItem';
import InputComponent from './components/input/InputComponent';

export default function App() {
  const [iteminput,setiteminput] = useState('')
  const [itemsarray,setitemsarray] = useState([]);
  const [modal,setmodal] = useState(false);

  const showModal = () =>{
    setmodal(true)
  }

  const addItemHandler = () => {
    setitemsarray((pre)=>[...pre,iteminput])
    setmodal(false)
  }

  const deleteitemhandler = (item) => {
    let filtereditems = itemsarray.filter((itm)=>item!=itm)
    setitemsarray(filtereditems);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>NsrApp</Text>
      <Button title='Add Goal' color='#5D3FD3' style={styles.button} onPress={showModal} />
      {modal && <InputComponent setiteminput = {setiteminput} addItemHandler={addItemHandler} setModal={setmodal}/>}
      <View style={styles.listcontainer}>
        {itemsarray.length===0 ?  <Text>No Items In The Lists</Text> :  <Text>Items In The Lists</Text> }
       <FlatList data={itemsarray} renderItem={(item)=>{
          return <GoalItem item={item} deleteitemhandler={deleteitemhandler} />
       }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:16,
    flex:4,
    backgroundColor:'gray'
  },
  heading:{
    fontSize:36,
    marginBottom:16
  },
  inputcontainer:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    borderBottomWidth:2,
    borderBottomColor:'green',
    paddingBottom:16,
  },
  input:{
    borderWidth:2,
    borderColor:'gray',
    width:"80%",
    height:"100%",
    paddingLeft:10,
  },
  listcontainer:{
    paddingTop:16,
    flex:18,
    width:'100%',
  },
  
});
 