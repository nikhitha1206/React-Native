import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/Meal';
import  { SET_FILTERS, TOGGLE_FAVORITE }  from '../actions/meals'
import { Toast } from 'react-native-root-toaster';
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case TOGGLE_FAVORITE:
        const existingIndex = state.favoriteMeals.findIndex((meal:Meal) => meal.id === action.mealId);
        if (existingIndex >= 0) { 
          Toast.show("Removed Meal from Favorites!",1500)
          const updatedFavMeals = [...state.favoriteMeals];
          updatedFavMeals.splice(existingIndex, 1);
          return { ...state, favoriteMeals: updatedFavMeals};
        } else {
            Toast.show("Added Meal to Favorites!",1500)
            let meal:any
            meal = state.meals.find(meal => meal.id === action.mealId);
          return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
        }
        case SET_FILTERS:
            Toast.show("Saved!",1500)
            const appliedFilters=action.filters;
            const filteredMeals=state.meals.filter(meal=>{
                if(appliedFilters.glutenFree && !meal.isGlutenFree){
                    return false
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree){
                    return false
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian){
                    return false
                }
                if(appliedFilters.vegan && !meal.isVegan){
                    return false
                }
                return true
            })
            return {...state,filteredMeals:filteredMeals}
      default:
        return state;
    }
  };

export default mealsReducer;