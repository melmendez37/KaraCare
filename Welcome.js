import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const WelcomePage = () => {

    return(
        <View style = {styles.container}>
            <LinearGradient colors = {['#00598B', '#AD6868']} style={styles.something}>
                <View style={styles.recOne}/>
                <View style={styles.recTwo}/>
                <View style={styles.recThree}/>
                <View style={styles.recFour}/>
                <Text style={styles.title}>KaraCare EMERGENCY SYSTEM</Text>
                <Image style={styles.image} source = {require('/Users/mendez22/TestApp/karacare.png')} />
                <View style={styles.button1} />
                <View style={styles.button2} />
                <Text style={styles.buttonText}>EXTERNAL RESPONDER</Text>
                <Text style={styles.buttonText2}>MEDICAL STAFF</Text>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>WELCOME</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: 424, left: 0, top: 0, flex: 1, alignItems: 'center',justifyContent: 'center'},
    something: {width: '100%', height: '100%', position: 'relative', borderRadius: 50, overflow: 'hidden'},
    recOne: {width: 280, height: 700, left: 70, top: 80, position: 'absolute', backgroundColor: '#BCBCBC'},
    recTwo: {width: 280, height: 41, left: 70, top: 80, position: 'absolute', backgroundColor: '#46525E'},
    recThree: {width: 280, height: 40, left: 70, top: 373, position: 'absolute', backgroundColor: '#46525E'},
    recFour: {width: 280, height: 56, left: 70, top: 724, position: 'absolute', backgroundColor: '#46525E'},
    title: {width: 250, height: 50, left: 90, top: 303, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700'},
    image: {width: 120, height: 122, left: 155, top: 162, position: 'absolute'},
    button1: {width: 150, height: 46, left: 135, top: 467, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 60},
    button2: {width: 150, height: 46, left: 135, top: 545, position: 'absolute', backgroundColor: '#D9D9D9', borderRadius: 60},
    buttonText:{width: 76, height: 50, left: 177, top: 474, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700'},
    buttonText2: {width: 76, height: 50, left: 177, top: 552, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700'},
    welcomeContainer: {width: 151, height: 100, left: 135, top: 377, position: 'absolute', alignItems: 'center', display: 'inline-flex'},
    welcomeText: {width: 151, height: 40, textAlign: 'center', color: '#FFFDFD', fontSize: 25, fontFamily: 'Roboto', fontWeight: 'bold'},
});

export default WelcomePage;