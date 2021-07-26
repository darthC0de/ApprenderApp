import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView , TouchableOpacity, Alert } from 'react-native';
import { useFonts, Schoolbell_400Regular } from '@expo-google-fonts/schoolbell';

export default function Options({options, get_answer}) {
    useFonts({
        Schoolbell_400Regular
      });
    
    
        return (
            <>
                {
                    options.map((option,index)=>{
                        return (
                            <TouchableOpacity
                             key={index}
                             onPress={()=>console.log({option})}
                            >
                                <Text>{option}</Text>                                
                            </TouchableOpacity>
                        )
                    })
                }
            </>
        )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  questionTitle:{
      textAlign: "center",
      fontSize: 40,
      fontFamily: "Schoolbell_400Regular",
      marginTop: 50,
  },
  question:{
      textAlign: "center",
      fontSize: 60,
      fontFamily: "Schoolbell_400Regular",
      padding: 20,
  }
});
