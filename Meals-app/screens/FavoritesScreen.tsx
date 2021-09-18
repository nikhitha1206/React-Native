import React from "react";
import { useSelector } from "react-redux";
import {StyleSheet, View,Text} from "react-native";
import MealList from "../components/MealList";
import { rootReducer } from "../App";


const FavoritesScreen =(props:any)=>{
    const favMeals = useSelector((state :rootReducer)=> state.meals.favoriteMeals);
    if(favMeals.length==0 || !favMeals){
        return <View style={styles.content}> 
            <Text style={styles.text}>No favorite meals Found.Start adding some!!</Text>
        </View>
    }
    return(
       <MealList meals={favMeals} navigation={props.navigation}/>
    )
}
FavoritesScreen.navigationOptions={
 title:'Your Favorites'
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'open-sans-bold',
        fontSize:16
    }
})
export default FavoritesScreen