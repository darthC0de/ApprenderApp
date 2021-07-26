import React  from 'react';
import { StyleSheet, View, Text,ActivityIndicator } from 'react-native';
import { useFonts, Schoolbell_400Regular } from '@expo-google-fonts/schoolbell';


export default function LoaderPage() {
    useFonts({
        Schoolbell_400Regular
      });
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator 
                color="#008891" 
                size={100}
                animating={true}
                
            />    
            <Text style={styles.loaderText}>Carregando perguntas...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    loaderContainer:{
        flex:1,
        backgroundColor: "#A9F448",
        justifyContent:"center",
        alignContent:"center"        
    },
    loaderText:{
        textAlign:"center",
        fontFamily: "Schoolbell_400Regular",
        fontSize: 24
    }
})