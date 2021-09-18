import React from "react";
import {ScrollView, View ,Text,StyleSheet,Button,Image} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { rootReducer } from "../App";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton'
import  { useEffect, useCallback } from 'react';
import { toggleFavorite } from '../store/actions/meals';
const MealDetailScreen =(props:any)=>{
    const mealId=props.navigation.getParam('MealId')
    const availableMeals = useSelector((state :rootReducer)=> state.meals.filteredMeals);
    let selectedMeal:any
    selectedMeal=availableMeals.find(meal=>meal.id===mealId)
    const dispatch = useDispatch();
    const currentMealIsFav=useSelector((state:rootReducer)=>state.meals.favoriteMeals.some((meal:any)=>meal.id===mealId))
    const toggleFavoriteHandler = useCallback(() => {
      dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);
  
    useEffect(() => {
      // props.navigation.setParams({ mealTitle: selectedMeal.title });
      props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);
    useEffect(()=>{
      props.navigation.setParams({isFav: currentMealIsFav});
    },[currentMealIsFav])
    return(
        <ScrollView>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
           <View style={styles.details}>
                    <Text style={styles.text}>{selectedMeal.duration}m</Text>
                    <Text style={styles.text}>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text style={styles.text}>{selectedMeal.affordability.toUpperCase()}</Text>
           </View>
           <Text style={styles.title}>Ingredients</Text>
           {selectedMeal.ingredients.map((ingredient:any)=><Text key={ingredient} style={styles.listItem}>{ingredient}</Text>)}
           <Text style={styles.title}>Steps</Text>
           {selectedMeal.steps.map((step:any)=><Text key={step} style={styles.listItem}>{step}</Text>)}
        </ScrollView>
    )
}
MealDetailScreen.navigationOptions=(navigationData:any)=>{
    const mealId=navigationData.navigation.getParam('MealId')
   // const selectedCategory=MEALS.find(meal=>meal.id===mealId)
   const toggleFavorite = navigationData.navigation.getParam('toggleFav');
   const title=navigationData.navigation.getParam('MealTitle')
   const isFavorite=navigationData.navigation.getParam('isFav')
    return{
        title:title,
        headerRight:()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favorite"
                iconName={isFavorite?'ios-star':'ios-star-outline'}
                onPress={toggleFavorite}
              />
            </HeaderButtons>
          )
    }
   
}
const styles=StyleSheet.create({
    text:{
      fontFamily:'open-sans-bold',
      fontSize:16
    },
    listItem:{
        fontFamily:'open-sans-bold',
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    },
   image:{
       width:'100%',
       height:200
   },
   title:{
       fontFamily:'open-sans-bold',
       fontSize:22,
       textAlign:'center'
   },
   details:{
       flexDirection:'row',
       padding:15,
       justifyContent:'space-around'
   }
})
export default MealDetailScreen