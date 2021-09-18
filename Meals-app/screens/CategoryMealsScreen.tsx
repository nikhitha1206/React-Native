import React from "react";
import { useSelector } from "react-redux";
import {StyleSheet,View,Text} from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { rootReducer } from "../App";
const CategoryMealsScreen =(props:any)=>{
    const catId=props.navigation.getParam('categoryId')
    const availableMeals = useSelector((state :rootReducer)=> state.meals.filteredMeals);
    const displayedMeals=availableMeals.filter(meal=>meal.categoryIds.indexOf(catId)>=0)
    if(displayedMeals.length==0)
    {
        return(<View style={styles.content}> 
            <Text style={styles.text}>No meals Found!!</Text>
        </View>)
    }
    return(
       <MealList meals={displayedMeals} navigation={props.navigation}/>
    )
}
CategoryMealsScreen.navigationOptions=(navigationData:any)=>{
    const catId=navigationData.navigation.getParam('categoryId')
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId)
    return{
        title:selectedCategory?.title,
      
    }
   
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
export default CategoryMealsScreen