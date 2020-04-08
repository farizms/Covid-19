import React,{useState} from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import {Entypo,MaterialIcons} from '@expo/vector-icons';
import Tracker from '../api/Tracker';
import CautionScreen from '../components/Caution';

const RecoverScreen = ({}) => {
const [term, setTerm] = useState('');
const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async () => {
try{
    const response = await Tracker.get('/all', {
        params: {
            term
        }
    });
    setResults(response.data.recovered);
} catch (err) {
    setErrorMessage('Something Went Wrong');
}
};

return (
        <View>
            <Text style={styles.title}>Click the Band-Aid</Text>
            <Entypo name='arrow-bold-down' style={{fontSize:24,alignSelf:'center',color:'black',marginTop:25 }} />
            <MaterialIcons name='healing' style={{fontSize:72,alignSelf:'center',color:'black',marginTop:25 }} onPress={searchApi} />
            <Text style={styles.number}>{results}</Text>
            <Text style={styles.title}>Of people had been recovered</Text>
            <CautionScreen />
            
        </View>
    );
};

const styles = StyleSheet.create ({
    homeContainer : {
        marginVertical : 50,
        marginHorizontal:25,
        borderColor:'black',
        borderRadius: 5,
        borderWidth:2
    },
    title : {
        alignSelf:'center',
        fontSize:24,
        marginTop:25
    },
    number:{
        fontSize:36,
        alignSelf:'center',
        
    }
});

export default RecoverScreen;