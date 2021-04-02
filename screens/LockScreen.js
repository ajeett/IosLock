import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Back from './../assets/back.png';

const LockScreen = () => {
    const { width, height } = Dimensions.get('window');
    const [passcode, setPasscode] = useState(['', '', '', '']);

    let numbers = [
        { id: 1 }, { id: 2 },
        { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 0 },
    ]

    const onNumberPress = (number) => {
        let tempCode = passcode;
        for (let index = 0; index < tempCode.length; index++) {
            if (tempCode[index] == '') {
                tempCode[index] = number
                break;
            } else {
                continue;
            }
        }
        console.log(tempCode, '---d');
        setData()

    }

    const setData = () => {
        const updatedCode = [...passcode];
        console.log(updatedCode, 'updatedCode');
        setPasscode(updatedCode);
        console.log(passcode, '???');
    };

    const onCancelPressed = () => {
        let tempCode = passcode;
        for (let index = tempCode.length - 1; index >= 0; index--) {
            if (tempCode[index] != '') {
                tempCode[index] = '';
                break;
            } else {
                tempCode.splice(-1, 1, '');
                continue
            }
        }
        console.log(tempCode, 'popo');
        setData(tempCode)

    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                resizeMode={'stretch'}
                style={{ width: "100%", height: "100%" }}
                blurRadius={10}
                source={Back}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.swipe}>

                        <View style={{}}>
                            <View>
                                <Text style={{ color: '#fff' }}>Enter Passcode</Text>
                            </View>
                            <View style={styles.codeContainer}>
                                {
                                    passcode.map(e => {
                                        let style = e == '' ? styles.code1 : styles.code2
                                        return <View style={style}></View>
                                    })
                                }
                            </View>

                        </View>
                    </View>



                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.numbersContainer}>
                            {
                                numbers.map(e => {
                                    return (
                                        <TouchableOpacity onPress={() => onNumberPress(e.id)} style={styles.number} key={e.id}>
                                            <Text style={styles.numberText}>{e.id}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }

                        </View>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity>
                            <Text style={styles.buttonText}>Forgot Passcode</Text>
                        </TouchableOpacity>
                        <View style={{ width: 90 }} />
                        <TouchableOpacity onPress={() => onCancelPressed()}>
                            <Text style={styles.buttonText}>Erase</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    swipe: {
        // height: 123,
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeContainer: {
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    code1: {
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#fff'
    },
    code2: {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: '#fff'
    },
    number: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
    },
    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 250,
        // height: 290,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    numberText: {
        textAlign: 'center',
        fontSize: 16
    },
    buttons: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
});


export default LockScreen;
