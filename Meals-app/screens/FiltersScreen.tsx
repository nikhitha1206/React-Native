import React,{useState,useCallback,useEffect} from "react";
import { View ,Text,StyleSheet,Switch} from "react-native";
import HeaderButton from '../components/HeaderButton'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";
const FilterSwitch=(props:any)=>{
    return  <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch value={props.state} 
        onValueChange={props.onChange} 
        trackColor={{true:Colors.primaryColor,false:'gray'}}
        thumbColor={Colors.primaryColor}/>
    </View>
    
}
const FiltersScreen =(props:any)=>{
    const [isGlutenFree,setIsGlutenFree]=useState(false)
    const [isLactoseFree,setIsLactoseFree]=useState(false)
    const [isVegan,setIsVegan]=useState(false)
    const [isVegetarian,setIsVegetarian]=useState(false)
    const dispatch = useDispatch()
    const saveFilters = useCallback(() => {
        const appliedFilters = {
          glutenFree: isGlutenFree,
          lactoseFree: isLactoseFree,
          vegan: isVegan,
          vegetarian: isVegetarian
        };
    
        dispatch(setFilters(appliedFilters))
      }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian,dispatch]);
    
      useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
      }, [saveFilters]);
    
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>
            <FilterSwitch label='Gluten-Free' state={isGlutenFree} onChange={(newValue:any)=>setIsGlutenFree(newValue)}/>
            <FilterSwitch label='Lactose-Free' state={isLactoseFree} onChange={(newValue:any)=>setIsLactoseFree(newValue)}/>
            <FilterSwitch label='Vegan' state={isVegan} onChange={(newValue:any)=>setIsVegan(newValue)}/>
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={(newValue:any)=>setIsVegetarian(newValue)}/>
        </View>
    )
}

FiltersScreen.navigationOptions = (navData:any )=> {
    return {
      headerTitle: 'Filter Meals',
      headerLeft: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={()=>navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navData.navigation.getParam('save')}
          />
        </HeaderButtons>
      )
    };
  };

const styles=StyleSheet.create({
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:20
    },
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        textAlign:'center',
        margin:20
    }
})

export default FiltersScreen