import React,{useState,useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
    } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
function Profile() {
    const [profile, setProfile] = useState({})
    const navigation = useNavigation()
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const resp = await fetch("https://dummyjson.com/users");
        const data = await resp.json();
        setProfile(data?.users[0]);
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#F6F2F8' }}>
            <View style={{ flex: 2, paddingHorizontal: 20, paddingTop: 20 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ height: 30, width: 30, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name='chevron-left' color={"black"} size={20} light></FontAwesome>
                    </View>
                    <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Bold', fontSize: 22, color: 'black' }}>Profile</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ height: 130, width: 130, borderRadius: 65, borderWidth: 1, borderColor: 'black' }}>
                        <Image
                            style={{ height: 120, width: 120, }}
                            source={{
                                uri: profile?.image,
                            }}
                        /></View>
                </View>
            </View>
            <View style={{ flex: 4, paddingHorizontal: 20, marginTop: 8 }}>
                <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 12, elevation: 5, padding: 10, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: 12, justifyContent: 'center', height: hp('5.5%'), width: wp('20%'), backgroundColor: 'white', borderColor: '#E3E5E5', borderWidth: 1, borderRadius: 10 }}>
                            <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#72777A' }}>Prefix</Text>
                            <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 16, color: '#373737' }}>Mr.</Text>
                        </View>
                        <View style={{ marginTop: 12, justifyContent: 'center', height: hp('5.5%'), width: wp('65%'), backgroundColor: 'white', borderColor: '#E3E5E5', borderWidth: 1, borderRadius: 10 }}>
                            <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#72777A' }}>FirstName</Text>
                            <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 16, color: '#373737' }}>{profile?.firstName}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 12, justifyContent: 'center', height: hp('5.5%'), width: wp('85%'), backgroundColor: 'white', borderColor: '#E3E5E5', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#72777A' }}>LastName</Text>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 16, color: '#373737' }}>{profile?.lastName}</Text>
                    </View>
                    <View style={{ marginTop: 12, justifyContent: 'center', height: hp('5.5%'), width: wp('85%'), backgroundColor: 'white', borderColor: '#E3E5E5', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#72777A' }}>Password</Text>
                        <Text style={{ marginLeft: 12,  fontSize: 16, color: '#373737' }}>{profile?.password}</Text>
                    </View>
                    <View style={{ marginTop: 12, justifyContent: 'center', height: hp('5.5%'), width: wp('85%'), backgroundColor: 'white', borderColor: '#E3E5E5', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#72777A' }}>Confirm Password</Text>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 16, color: '#373737' }}>{profile?.password}</Text>
                    </View>
                    <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', height: hp('5.5%'), width: wp('85%'), backgroundColor: '#752686', borderRadius: 10 }}>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 16, color: 'white' }}>Link Family MRN ID</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={{ height: 40, width: 130, fontFamily: 'Montserrat-Regular', backgroundColor: '#FFEEF3', borderRadius: 8, marginTop: 20, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }}><Text style={{ color: '#D23333', fontSize: 16 }}>Log Out</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1,paddingHorizontal:20,paddingTop:20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View style={{ height: hp('3%'), width: wp('43%'), backgroundColor: 'white', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{  fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>Help & Support</Text>
                    </View>
                    <View style={{ height: hp('3%'), width: wp('43%'), backgroundColor: 'white', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{  fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>About Us</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                    <View style={{ height: hp('3%'), width: wp('43%'), backgroundColor: 'white', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{  fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>Terms & Conditions</Text>
                    </View>
                    <View style={{ height: hp('3%'), width: wp('43%'), backgroundColor: 'white', borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{  fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>Privacy Policy</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Profile;