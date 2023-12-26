import { StyleSheet, Text,View } from "react-native";



const GoalItem = ({item,deleteitemhandler}) =>{
    console.log(item)
    return <View key={`a${item.index}`}>
    <Text style={styles.listsitem} onPress={()=>deleteitemhandler(item.item)}>{item.item}</Text>
  </View>
}

export default GoalItem;

const styles = StyleSheet.create({
    listsitem:{
        backgroundColor:'#5e0acc',
        margin:5,
        width:"100%",
        color:'white',
        padding:12,
        borderRadius:5,
      },
})