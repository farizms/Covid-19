import React from 'react';
import { Button, View, Text,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        
        <View>
            <View style={styles.homeContainer}>
                <Ionicons name='md-medical' style={{fontSize:72,alignSelf:'center',color:'red',marginVertical:30 }} />
                <Text style={styles.homeTitle}>Covid 19</Text>
                <Button title="Global Updates" onPress={() => navigation.navigate('Global')}/>
                <Button title="Nation Updates" onPress={() => navigation.navigate('Country')}/>
            </View>
        <Text style={styles.homeTitle}>#StaySafe</Text>
        <Text style={{alignSelf:'center',marginTop:125}}>created by farizmsurya@gmail.com</Text>
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
        marginBottom:20
    },
    subTitle : {
        fontSize : 36,
        alignSelf: 'center',
        marginVertical:'10'
    }
});

export default HomeScreen;