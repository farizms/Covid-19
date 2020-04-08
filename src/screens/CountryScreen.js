import React,{useState} from 'react';
import {Text,View,StyleSheet,Button,FlatList} from 'react-native';
import Tracker from '../api/Tracker';

const CountryScreen = ({}) => {
    const [term, setTerm] = useState('');
const [results, setResults] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const searchApi = async () => {
try{
    const response = await Tracker.get('/countries', {
        params: {
            term
        }
    });
    setResults(response.data);
} catch (err) {
    setErrorMessage('Something Went Wrong');
}
};

    return(
        <View>
            <Button title="Nation Had been Affected" onPress={searchApi}/>
            <Text style={styles.number}>{results.length}</Text>
        </View>
        
    );
};

const styles = StyleSheet.create ({
    number: {
        fontSize:32,
        alignSelf:'center'
    }
});

export default CountryScreen;