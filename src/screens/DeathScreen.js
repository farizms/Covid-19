import React,{useState} from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import {Entypo,FontAwesome5} from '@expo/vector-icons';
import Tracker from '../api/Tracker';
import CautionScreen from '../components/Caution';

const DeathScreen = ({}) => {
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
    setResults(response.data.deaths);
} catch (err) {
    setErrorMessage('Something Went Wrong');
}
};

return (
        <View>
            <Text style={styles.title}>Click the Notes</Text>
            <Entypo name='arrow-bold-down' style={{fontSize:24,alignSelf:'center',color:'black',marginTop:15 }} />
            <FontAwesome5 name='notes-medical' style={{fontSize:72,alignSelf:'center',color:'red',marginTop:25 }} onPress={searchApi} />
            <Text style={styles.number}>{results}</Text>
            <Text style={styles.title}>People has died by this virus</Text>
            <CautionScreen />
        </View>
    );
};

const styles = StyleSheet.create ({
    
    title : {
        alignSelf:'center',
        fontSize:24,
        marginTop:25
    },
    number:{
        fontSize:36,
        alignSelf:'center',
        
    },
    
});

export default DeathScreen;