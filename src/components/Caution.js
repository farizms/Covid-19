import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CautionScreen = ({}) => {
    return (
                <View style={styles.homeContainer}>
                <Text style={styles.text}>Protect Yourself and others from the COVID-19 with :</Text>
                <Text style={styles.text}>• Wash your hands with soap or alcohol-based rub</Text>
                <Text style={styles.text}>• Maintain Physical distancing</Text>
                <Text style={styles.text}>• If you have fever, cough and difficulty breathing, seek medical care early</Text>
            </View>
    )
}

const styles = StyleSheet.create ({
    homeContainer : {
        borderColor:'black',
        borderRadius: 5,
        borderWidth:2,
        marginHorizontal:15,
        marginTop:75
    },
    text : {
        fontSize:12,
        marginBottom:5
    }
});
export default CautionScreen;