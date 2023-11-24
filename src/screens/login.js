import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Animated, Easing} from "react-native";
import React, { useRef } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
export const Login = ({
    label = 'Registered Mobile',
    titleActiveSize = 12,
    titleInActiveSize = 14,
    titleActiveColor = '#444444',
    titleInactiveColor = '#c2c2c2',
    labeldash = 'Enter Password'
}) => {
    const [text, onChangeText] = React.useState('');
    const [textdash, onChangeTextdash] = React.useState('');
    const animatedValue = useRef(new Animated.Value(0));
    const [textErr, setTextErr] = React.useState('')
    const [textdashErr, setTextdashErr] = React.useState('')
    const animatedValuedash = useRef(new Animated.Value(0));
    const navigation = useNavigation()
    const validation = () => {
        let valid = true
        if (!text) {
            setTextErr('Please Enter Username')
            valid = false;
        }
        if (!textdash) {
            setTextdashErr('Please Enter Password')
            valid = false;
        }
        if (text != "atuny0") {
            setTextErr('Please Enter Correct Username')
            valid = false;
        }
        if (textdash != "9uQFF1Lh") {
            setTextdashErr('Please Enter Correct Password')
            valid = false;
        }
        if (valid === true) {
            navigation.navigate('BottomTabNavigator')
        }
    }
    const returnAnimatedTitleStyles = {
        transform: [
            {
                translateY: animatedValue?.current?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [22, -4],
                    extrapolate: 'clamp',
                }),
            },
        ],
        fontSize: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInActiveSize, titleActiveSize],
            extrapolate: 'clamp',
        }),
        color: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInactiveColor, titleActiveColor],
        }),
    };

    const viewStyles = {
        borderBottomColor: animatedValue?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInactiveColor, titleActiveColor],
        }),
        borderBottomWidth: 0.8,
    }

    const returnAnimatedTitleStylesdash = {
        transform: [
            {
                translateY: animatedValuedash?.current?.interpolate({
                    inputRange: [0, 1],
                    outputRange: [22, -4],
                    extrapolate: 'clamp',
                }),
            },
        ],
        fontSize: animatedValuedash?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInActiveSize, titleActiveSize],
            extrapolate: 'clamp',
        }),
        color: animatedValuedash?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInactiveColor, titleActiveColor],
        }),
    };

    const viewStylesdash = {
        borderBottomColor: animatedValuedash?.current?.interpolate({
            inputRange: [0, 1],
            outputRange: [titleInactiveColor, titleActiveColor],
        }),
        borderBottomWidth: 0.8,
    }

    const onFocus = () => {
        Animated.timing(animatedValue?.current, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    };

    const onBlur = () => {
        if (!text) {
            Animated.timing(animatedValue?.current, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        }
    };
    const onFocusdash = () => {
        Animated.timing(animatedValuedash?.current, {
            toValue: 1,
            duration: 500,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
        }).start();
    };

    const onBlurdash = () => {
        if (!text) {
            Animated.timing(animatedValuedash?.current, {
                toValue: 0,
                duration: 500,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        }
    };

    return (

        <View style={{ flex: 1, backgroundColor: '#F6F2F8' }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
                <View style={{ height: 130, width: 130, borderRadius: 65, borderWidth: 1, borderColor: 'black' }}>
                    <Image
                        style={{ height: 120, width: 120, }}
                        source={{
                            uri: 'https://robohash.org/hicveldicta.png',
                        }}
                    /></View>
            </View>

            <View style={{ flex: 2, paddingHorizontal: 12,justifyContent:'center' }}>
                    <Animated.View style={[styles.subContainer, viewStyles]}>
                        <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
                        <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            style={styles.textStyle}
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                    </Animated.View>
                    <Text style={{ color: 'red', fontSize: 9, paddingLeft: 20 }}>{textErr}</Text>
                    <Animated.View style={[styles.subContainer, viewStylesdash]}>
                        <Animated.Text style={[returnAnimatedTitleStylesdash]}>{labeldash}</Animated.Text>
                        <TextInput
                            onChangeText={onChangeTextdash}
                            value={textdash}
                            style={styles.textStyle}
                            onBlur={onBlurdash}
                            onFocus={onFocusdash}
                        />
                    </Animated.View>
                    <Text style={{ color: 'red', fontSize: 9, paddingLeft: 20 }}>{textdashErr}</Text><Text style={{ paddingRight: 20, marginTop: 6, fontFamily: 'Montserrat-SemiBold', fontSize: 12, color: '#752686', textAlign: 'right' }}>Forgot Password?</Text>
                    <TouchableOpacity onPress={() => { validation() }} style={{ height: 50, width: 130, backgroundColor: '#752686', borderRadius: 8, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }}><Text style={{ color: 'white', fontSize: 20 }}>Login</Text></TouchableOpacity>
                    <Text style={{marginTop:12, fontFamily: 'Montserrat-Normal',textAlign:'center', fontSize: 12, color: '#5F5F5F' }}>Don’t have an Account? </Text><Text style={{textAlign:'center', fontFamily: 'Montserrat-SemiBold', fontSize: 12, color: '#752686' }}> Sign Up</Text>

            </View>
            <View style={{ flex: 1,marginTop:60}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 26, alignContent: 'center', }}>
                    <Text style={{textAlign:'center', fontFamily: 'Montserrat-Normal', fontSize: 12, color: '#5F5F5F' }}>By proceeding, you agree to our </Text><Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 12, color: '#752686' }}>Terms & Conditions & Privacy Policy</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    underlineStyleBase: {
        height: hp('6.5%'), width: wp('12.4%'), borderWidth: 1, borderRadius: hp('1.5%'), borderColor: '#B8BCCA50', alignItems: 'center', justifyContent: 'center', color: 'black', marginRight: 10
    },
    subContainer: {
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: '#E3E5E5',
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        height: hp('7%'),
        marginTop: 5
    },
    textStyle: {
        paddingBottom: 10,
        fontSize: 16,
    },
   
});