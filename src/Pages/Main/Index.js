import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView , TouchableOpacity, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import LoaderPage from '../../Components/Loader'
import api from '../../services/api';
import { useFonts, Schoolbell_400Regular } from '@expo-google-fonts/schoolbell';
import Options from "../../Components/Options";

export default function MainPage() {
    useFonts({
        Schoolbell_400Regular
      });
    
    const [status,setStatus] = useState(false)
    const [loading,setLoading] = useState(false)
    const [challenges,setChallenges] = useState([])
    const [challenge,setChallenge] = useState({})
    const [validating,setValidating] = useState(false)

    async function get_challenges(){
        await api.get('/questions')
        .then(response=>{
            setChallenges(response.data)
            setStatus(true)
            return response.data
        })
        .catch(error=>{
            throw new Error(error);
        })
    }

    useEffect(()=>{
        const c = challenges[Math.floor(Math.random() * challenges.length)]
        // c.options = shuffleArray(c.options)
        setChallenge(c)
        console.log(challenge)
        setLoading(false)
        
    },[loading,challenges])

    async function get_challenge(){
        const c = await challenges[Math.floor(Math.random() * challenges.length)]
        await setChallenge(c)

    }
    async function validate_answer(response){
        setValidating(true)
        const correct = challenge.answer
        if (response == correct){
            console.log("validate")
            setTimeout(()=>{
                setLoading(true)
                setValidating(false)
            },5000)
        } else {
            console.log("wrong")
        }
    }    
    
    if(!status){
        return (
            <AppLoading
                startAsync={get_challenges}
                onFinish={() => setLoading(true)}
                onError={console.warn}
            />
        )
    } else if(loading){
        return(
            <LoaderPage />
        )
    } else {
        return (
            <ScrollView>
                <Text
                    style={styles.questionTitle}
                > 
                    Quanto é 
                </Text>
                <Text style={styles.question}>{challenge.question}</Text>
                {
                    challenge.type == "options" ? (
                        <Options options={challenge.options} get_answer={validate_answer} />
                    ) : (
                        <></>
                    )
                }
                <Text
                >
                    Pontuação
                </Text>
            </ScrollView>
        )
    }
    
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
