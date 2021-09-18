import React from "react";
import {StyleSheet,FlatList} from 'react-native' 
import MealItem from "./MealItem";
import { useSelector } from "react-redux";
import Meal from "../models/Meal";
const MealList =(props:any)=>{
    const favoriteMeals=useSelector((state:any)=>state.meals.favoriteMeals)
    const renderMeals=(itemData:any)=>{
        const isFavorite=favoriteMeals.some((meal:Meal)=>meal.id===itemData.item.id)
        return  <MealItem title={itemData.item.title} onSelectMeal={()=>{ props.navigation.navigate({routeName:'MealDetail',params:{MealId:itemData.item.id,MealTitle:itemData.item.title,isFav:isFavorite}})}} 
        duration={itemData.item.duration} image={itemData.item.imageUrl} complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}/>
     }
    return (
        <FlatList keyExtractor={(item,index)=>item.id} data={props.meals} renderItem={renderMeals}/>
    )
}
const styles=StyleSheet.create({
    
})
export default MealList