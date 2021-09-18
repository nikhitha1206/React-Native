import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import React from 'react'
import { Text } from 'react-native'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FiltersScreen from '../screens/FiltersScreen'


const MealsNavigator=createStackNavigator({
    Categories:{
        screen:CategoriesScreen
    },
    CategoryMeals:
    {
        screen:CategoryMealsScreen,
    },
    MealDetail:{
        screen:MealDetailScreen
        
    }
},
{
    defaultNavigationOptions:
    {
        headerStyle:{backgroundColor:Colors.primaryColor},
        headerTintColor:'white',
        headerTitleAlign:'center',
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        }
    } 
}
);
const FavNavigator=createStackNavigator({
    Favorites:FavoritesScreen,
    MealDetail:MealDetailScreen
},{
    defaultNavigationOptions:
    {
        headerStyle:{backgroundColor:Colors.primaryColor},
        headerTintColor:'white',
        headerTitleAlign:'center',
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        }
    }  
})
const FiltersNavigator=createStackNavigator({
    Filters:FiltersScreen,
    
},{
    defaultNavigationOptions:
    {
        headerStyle:{backgroundColor:Colors.primaryColor},
        headerTintColor:'white',
        headerTitleAlign:'center',
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        }
    }  
})
const tabScreenConfig={
    
    Meals:{
        screen:MealsNavigator,
        navigationOptions:{
            tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Meals!</Text>,
            tabBarIcon:(tabInfo:any)=>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites:{
        screen:FavNavigator,
        navigationOptions:{
        tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Favorites!</Text>,    
        tabBarIcon:(tabInfo:any)=>{    
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/> 
        }
     }
   },
};
const MealsFavTabNavigator=Platform.OS==='android'?createMaterialBottomTabNavigator(tabScreenConfig,{ 
    activeColor:'white',
    shifting:true

}):createBottomTabNavigator(
    tabScreenConfig
    ,{
    tabBarOptions:{
        activeBackgroundColor:Colors.primaryColor,
        activeTintColor:'white'
    }
});

const MainNavigator=createDrawerNavigator({
    MealsFavs: {screen:MealsFavTabNavigator,navigationOptions:{
        drawerLabel:<Text style={{fontFamily:'open-sans-bold',marginTop:50,marginHorizontal:15}}>Meals</Text>
    }},
    Filters: FiltersNavigator
    
})

export default createAppContainer(MainNavigator)