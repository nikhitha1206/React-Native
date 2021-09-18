import React from "react";
import { View ,Text,StyleSheet, Button, FlatList,TouchableOpacity} from "react-native";
import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
const CategoriesScreen =(props:any)=>{
    return(
       <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} 
       renderItem={itemData => <TouchableOpacity  style={styles.gridItem} 
       onPress={()=>{ props.navigation.navigate({routeName:'CategoryMeals',params:{categoryId:itemData.item.id}})}}>
           <View style={{...styles.container,...{backgroundColor:itemData.item.color}}}>
               <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
           </View>
       </TouchableOpacity>} numColumns={2} />
    )
}
CategoriesScreen.navigationOptions=(navData:any)=>{
   return{
    title:'Meal Category',
    headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={()=>navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
   }
}
  
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    gridItem:{
       flex:1,
       margin:20,
       height:150,
       borderRadius:10,
       elevation:5,
       overflow:'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
  
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'right'
    }
})
export default CategoriesScreen