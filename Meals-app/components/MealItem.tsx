import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'
const MealItem:any=(props:any)=>{
    return <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
                <View style={{...styles.mealRow,...styles.mealHeader}}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                     <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={1}>{props.title}</Text></View></ImageBackground>
                    </View>
    
                <View style={{...styles.mealRow,...styles.mealDetails}}>
                    <Text style={styles.details}>{props.duration}m</Text>
                    <Text style={styles.details}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.details}>{props.affordability.toUpperCase()}</Text>
                </View>
          </View>
        </TouchableOpacity> 
    </View>       
}
const styles=StyleSheet.create({
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        color:'white',
        textAlign:'center'
    },
    mealHeader:{
        height:'85%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealDetails:{
        alignItems:'center',
        justifyContent:'space-between'
    },
    mealItem:{
        height:200,
        width:'90%',
        marginVertical:10,
        marginHorizontal:'5%',
        borderRadius:10,
        backgroundColor:'#f5f5f5',
        overflow:'hidden'
    },
    mealRow:{
       flexDirection:'row'
    },
    details:{
        fontFamily:'open-sans-bold',
        fontSize:16,
        color:'black'
    }
})
export default MealItem