import React from 'react';
import {Text,Button,View,StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const GlobalScreen = ({navigation}) => {
    return (
        <View>
            <View style={styles.homeContainer}>
                <Entypo name='globe' style={{fontSize:72,alignSelf:'center',color:'black',marginTop:25 }} />
                <Text style={styles.homeTitle}>Global Update</Text>
                <Button title="Confirmed Case" onPress={() => navigation.navigate('Confirmed')}/>
                <Button title="Recover Case" onPress={() => navigation.navigate('Recover')}/>
                <Button title="Death Case" onPress={() => navigation.navigate('Death')}/>
                </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    homeContainer : {
        marginVertical : 50,
        marginHorizontal:50,
        borderColor:'black',
        borderRadius: 5,
        borderWidth:2
    },
    homeTitle : {
        fontSize : 36,
        alignSelf: 'center',
    },
    subTitle : {
        fontSize : 36,
        alignSelf: 'center',
        marginVertical:'10'
    }
});

export default GlobalScreen;