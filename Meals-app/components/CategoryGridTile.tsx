import React from 'react'
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native'
// itemData => <TouchableOpacity  style={styles.gridItem} 
//        onPress={()=>{ props.navigation.navigate({routeName:'CategoryMeals',params:{categoryId:itemData.item.id}})}}>
//            <View style={{...styles.container,...{backgroundColor:itemData.item.color}}}>
//                <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
//            </View>
//        </TouchableOpacity>} numColumns={2}
const CategoryGridTile=(props:any)=>{
    return( 
    <TouchableOpacity  style={styles.gridItem} 
        onPress={props.onselect}>
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>)
}
const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:20,
        height:150,
        borderRadius:10,
        overflow:'hidden'
     },
     container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:3,
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
export default CategoryGridTile