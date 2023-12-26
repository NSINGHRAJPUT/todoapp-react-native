import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const InputComponent = ({setiteminput,addItemHandler,setModal}) =>{
    return <Modal animationType="slide">
    <View style={styles.inputcontainer}>
        <Image style={styles.image} source={require('../../assets/Goal.png')} />
        <TextInput style={styles.input} onChangeText={(e)=>setiteminput(e)}  placeholder='Enter your tasks'/>
        <Button title='Add Item' color='#5e0acc' style={styles.button} onPress={addItemHandler} />
        <Button title='Cancel' color='#ff5b00' style={styles.button} onPress={()=>setModal(false)} />
  </View>
  </Modal>
}

export default InputComponent;

const styles = StyleSheet.create({
    inputcontainer:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        rowGap:6,
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'green',
        paddingBottom:16,
        backgroundColor:'gray'
      },
      input:{
        borderWidth:2,
        borderColor:'gray',
        width:"80%",
        height:"5%",
        paddingLeft:10,
      },
      image:{
        height:200,
        width:200,
        margin:20
      }
})