import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
    } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const list = ["12", "13", "14", "15", "16"]
function Graph() {
    const [profiles, setProfiles] = useState({})
    const [more, setMore] = useState(false)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const resp = await fetch("https://dummyjson.com/users");
        const data = await resp.json();
        setProfiles(data?.users);

    };
    console.log("pyyu", profiles)
    return (
        <View style={{ flex: 1, backgroundColor: '#F2F4F6', paddingHorizontal: 20 }}>
            <View style={{ flex: 1, borderBottomWidth: 1, borderColor: '#ECECEC', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View>
                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 22, color: '#686868' }}>Good Morning</Text>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 16, color: '#0D0D0D' }}>{profiles[0]?.firstName}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <View style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
                        <Image
                            style={{ height: 30, width: 30, }}
                            source={{
                                uri: 'https://robohash.org/hicveldicta.png',
                            }}
                        /></View>
                </View>
            </View>
            <View style={{ flex: 3, marginTop: 7 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: '#752686', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'trending-up'} size={15} color={'#752686'} />

                        </View>
                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 18, color: '#0E0F0C' }}>Quick Glance States</Text>
                    </View>

                    <View>
                        <FontAwesome name='chevron-right' color={"black"} size={20} light></FontAwesome>
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'column', height: hp('10%'), width: wp('24%'), backgroundColor: 'white', elevation: 6, borderRadius: 12, marginVertical: 8, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 30, width: 70, backgroundColor: '#752686', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}>
                                <Ionicons color={'white'} size={22} name={'trending-up'} />
                            </View>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 10, color: '#686868' }}>In Patients</Text>
                            <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12, color: '#686868' }}>36</Text>
                        </View>
                        <View style={{ flexDirection: 'column', height: hp('10%'), width: wp('24%'), backgroundColor: '#F6CDFF', elevation: 6, borderRadius: 12, marginVertical: 8, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 30, width: 70, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}>
                                <Ionicons color={'752686'} size={22} name={'trending-down'} />
                            </View>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 10, color: '#686868' }}>Out Patients</Text>
                            <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12, color: '#686868' }}>12</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 18, margin: 8, borderRadius: 12, backgroundColor: 'white', elevation: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#686868' }}>Patient Satisfaction Score</Text>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12, color: '#686868' }}>60 %</Text>
                        <AnimatedCircularProgress
                            size={150}
                            width={15}
                            fill={60}
                            arcSweepAngle={180}
                            tintColor="#BE27DE"
                            rotation={-90}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#85369680" />
                    </View>
                    <View style={{ paddingHorizontal: 18, margin: 8, borderRadius: 12, backgroundColor: 'white', elevation: 6, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#686868' }}>Patient Satisfaction Score</Text>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12, color: '#686868' }}>60 %</Text>
                        <AnimatedCircularProgress
                            size={150}
                            width={15}
                            fill={60}
                            arcSweepAngle={180}
                            tintColor="#BE27DE"
                            rotation={-90}
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#85369680" />
                    </View>
                </ScrollView>
            </View>
            <View style={{ flex: 2 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Ionicons name={'calendar'} size={22} color={'#3C7370'} />


                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 18, color: '#0E0F0C' }}>Today’s Appointments</Text>
                    </View>

                    <View>
                        <FontAwesome name='chevron-right' color={"black"} size={20} light></FontAwesome>
                    </View>
                </View>
                <View style={{ height: hp('12%'), marginTop: 6, borderRadius: 12, elevation: 5, width: wp('88%'), backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 6 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: hp('8%'), width: hp('7%'), borderRadius: 8, backgroundColor: '#3C7370', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: 24, color: 'white' }}>21</Text>
                            <Text style={{ fontSize: 16, color: 'white' }}>June</Text>
                            <Text style={{ fontSize: 12, color: 'white' }}>Monday</Text>
                        </View>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', paddingLeft: 6 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                            <View style={{ flexDirection: 'row' }}><Ionicons name='time' color={"#704C9A"} size={20} light></Ionicons>
                                <Text style={{ marginLeft: 3, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#525252' }}>1:30 PM - 2:30 PM</Text></View>
                            <View style={{ height: 20, width: 80, backgroundColor: '#DFF4E5', borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Ionicons name='videocam' color={"#24A148"} size={15} light></Ionicons>
                                <Text style={{ marginLeft: 5, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#24A148' }}>virtual</Text>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 4 }}><Ionicons name='medkit' color={"#704C9A"} size={18} light></Ionicons>
                            <Text style={{ marginLeft: 3, fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#525252' }}>Ankura Hospital - LB Nagar</Text></View>
                        <View style={{ flexDirection: 'row', marginTop: 4 }}><Ionicons name='person' color={"#704C9A"} size={18} light></Ionicons>
                            <Text style={{ marginLeft: 3, fontFamily: 'Montserrat-Regular', fontSize: 14, color: '#525252' }}>Dr. Ambati Sagar</Text></View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 2 }}>
                <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 18, color: '#0E0F0C' }}>Next</Text>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column', elevation: 4, borderRadius: 8, backgroundColor: 'white', width: wp('88%'), paddingHorizontal: 12, justifyContent: 'space-between' }}>
                        {more === true ? <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Name of Patient</Text>
                            {profiles?.length > 0 && profiles?.map((item) => (
                                <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.firstName}</Text>
                            ))}
                        </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Height</Text>
                                {profiles?.length > 0 && profiles?.map((item) => (
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.height}</Text>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Gender</Text>
                                {profiles?.length > 0 && profiles?.map((item) => (
                                    <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.gender}</Text>
                                ))}
                            </View>
                        </View> : <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Name of Patient</Text>
                            {profiles?.length > 0 && profiles.slice(0, 3)?.map((item) => (
                                <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.firstName}</Text>
                            ))}
                        </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Height</Text>
                                {profiles?.length > 0 && profiles.slice(0, 3)?.map((item) => (
                                    <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.height}</Text>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 12, color: '#0E0F0C' }}>Gender</Text>
                                {profiles?.length > 0 && profiles.slice(0, 3)?.map((item) => (
                                    <Text style={{ marginTop: 6, fontFamily: 'Montserrat-Regular', fontSize: 12, color: 'black' }}>{item?.gender}</Text>
                                ))}
                            </View>
                        </View>}
                        <TouchableOpacity onPress={() => setMore(!more)} style={{alignSelf:'center', height: 20, width: wp('88%'), backgroundColor: '#F2F4F6', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            {profiles && !more ? <Text>+ {profiles?.length} more</Text> : <Text> - show less</Text>}</TouchableOpacity>
                    </View></ScrollView>

            </View>
            <View style={{ flex: 2 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>

                        <Ionicons name={'briefcase'} size={22} color={'#F1966C'} />


                        <Text style={{ marginLeft: 12, fontFamily: 'Montserrat-Regular', fontSize: 18, color: '#0E0F0C' }}>Work-scope</Text>
                    </View>

                    <View>
                        <FontAwesome name='chevron-right' color={"black"} size={20} light></FontAwesome>
                    </View>
                </View>

                <View style={{ height: hp('20%'), width: wp('88%'), backgroundColor: 'white', borderRadius: 12, marginTop: 7, padding: 12 }}>
                    <View style={{ flexDirection: 'row' }}><Image
                        style={{ height: 30, width: 30, }}
                        source={require('../image/Group_57.png')}
                    /><Text style={{ color: '#333333', fontSize: 14, marginLeft: 5 }}>Wards ( 5 ) </Text></View>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                            {list.map((item, index) => (
                                <View style={{ marginLeft: 8, marginTop: 3, height: hp('6%'), width: wp('18%'), alignItems: 'center', justifyContent: 'center', borderRadius: 8, backgroundColor: '#F2F4F6' }}>
                                    <Text>Room : {item}</Text>
                                </View>
                            ))}</View></ScrollView>
                </View>
            </View>
        </View >
    );
}

export default Graph;