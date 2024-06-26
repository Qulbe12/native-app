import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';

import {COLORS, dummyData, FONTS} from '../../constants';
import {
    ElementSvg,
    FreeDeliverySvg,
    FreeFromSvg,
    MicrophoneSvg,
    ProfileArrowSvg,
    SmallMapPin,
    StarSvg,
    ViewAllSvg,
} from '../../svg';
import {useAppDispatch, useAppSelector} from "../../redux/Store";
import {getMerchantsAction} from "../../redux/actions/merchantsaction";

// const categories = [
//     {
//         id: '1',
//         category: 'Burger',
//         icon: <BurgerSvg/>,
//     },
//     {
//         id: '2',
//         category: 'Salads',
//         icon: <GuacamoleSvg/>,
//     },
//     {
//         id: '3',
//         category: 'Pizza',
//         icon: <PizzaSvg/>,
//     },
//     {
//         id: '4',
//         category: 'Sushi',
//         icon: <SushiSvg/>,
//     },
//     {
//         id: '5',
//         category: 'Deserts',
//         icon: <DoughnutSvg/>,
//     },
// ];

export default function Home() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch()
    const {merchants} = useAppSelector(state => state.merchants)

    useEffect(() => {
        dispatch(getMerchantsAction())
    }, [])

    const [category, setCategory] = useState('Burger');

    function renderHeader() {
        return (
            <ImageBackground
                source={{uri: 'http://res.cloudinary.com/simpleview/image/upload/v1640823092/clients/orlandofl/185683_entrees_667152ec-7340-4428-91e7-72265329d7d0.jpg'}}
                style={{
                    height: 180,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                imageStyle={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: COLORS.white,
                        borderRadius: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                    }}>
                    <TextInput style={{flex: 1}} placeholder="Search for a dish..."/>
                    <TouchableOpacity style={{paddingLeft: 15}}>
                        <MicrophoneSvg/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }

    function renderPopularRestaurants() {
        return (
            <View style={{paddingHorizontal: 16}}>
                <Text style={{...FONTS.H2, marginBottom: 8, color: COLORS.black}}>
                    Previous Checkins
                </Text>
                {dummyData.map((item, index) => {

                    return (
                        <View key={index}>
                            <Shadow
                                offset={[0, 0]}
                                distance={10}
                                startColor={'rgba(6, 38, 100, 0.04)'}
                                // @ts-ignore
                                finalColor={'rgba(6, 38, 100, 0.0)'}>
                                <TouchableOpacity
                                    style={{
                                        width: '100%',
                                        height: 140,
                                        backgroundColor: COLORS.white,
                                        borderRadius: 20,
                                        marginBottom: 8,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                    onPress={() =>
                                        // @ts-ignore
                                        navigation.navigate('RestaurantMenu', {
                                            restaurant: item,
                                        })
                                    }>
                                    <ImageBackground
                                        source={item.photo_426x420}
                                        style={{width: 142, height: '100%'}}
                                        imageStyle={{
                                            borderTopLeftRadius: 20,
                                            borderBottomLeftRadius: 20,
                                        }}>
                                        <View
                                            style={{
                                                height: 26,
                                                backgroundColor: COLORS.carrot,
                                                alignSelf: 'flex-start',
                                                paddingHorizontal: 13,
                                                borderRadius: 20,
                                                right: -10,
                                                top: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}>
                                            <StarSvg/>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    fontFamily: 'Lato-Regular',
                                                    color: COLORS.white,
                                                    marginLeft: 6,
                                                }}>
                                                {item.rating}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                position: 'absolute',
                                                right: 0,
                                            }}>
                                            <ElementSvg/>
                                        </View>
                                    </ImageBackground>
                                    <View
                                        style={{
                                            marginLeft: 20,
                                            marginVertical: 20,
                                            flex: 1,
                                        }}>
                                        <Text
                                            style={{
                                                ...FONTS.H4,
                                                textTransform: 'capitalize',
                                                lineHeight: 24 * 1.2,
                                                color: COLORS.black,
                                            }}
                                            numberOfLines={1}>
                                            {item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: COLORS.gray,
                                                fontFamily: 'Lato-Regular',
                                                fontSize: 14,
                                                marginBottom: 8,
                                            }}>
                                            {item.type}
                                        </Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}>
                                            <SmallMapPin/>
                                            <Text
                                                style={{
                                                    marginLeft: 8,
                                                    fontFamily: 'Lato-Regular',
                                                    fontSize: 14,
                                                    color: COLORS.black,
                                                    marginBottom: 2,
                                                }}>
                                                {item.distance}
                                            </Text>
                                        </View>
                                        {item.freeDelivery && <FreeDeliverySvg/>}
                                        {!item.freeDelivery && item.freeDeliveryFrom && (
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }}>
                                                <FreeFromSvg/>
                                                <Text
                                                    style={{
                                                        ...FONTS.Lato_400Regular,
                                                        fontSize: 14,
                                                        color: COLORS.black,
                                                    }}>
                                                    {' '}
                                                    ${item.freeDeliveryFrom}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                    <View style={{paddingRight: 16}}>
                                        <ProfileArrowSvg/>
                                    </View>
                                </TouchableOpacity>
                            </Shadow>
                        </View>
                    );
                })}
            </View>
        );
    }

    function renderHotOffers() {
        return (
            <View style={{top: 0, marginBottom: 5}}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                        marginBottom: 8,
                    }}>
                    <Text
                        style={{...FONTS.H2, lineHeight: 32 * 1.2, color: COLORS.black}}>
                        Restaurants
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AllOffers' as never)}>
                        <ViewAllSvg/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={merchants?.merchants.rows}
                    horizontal={true}
                    contentContainerStyle={{paddingLeft: 16}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                // @ts-ignore
                                navigation.navigate("DishDescription", {dish: item})
                            }}>
                                <Image
                                    source={{uri: "https://d3aux7tjp119y2.cloudfront.net/images/Tak2-CMSTemplate_IrMZHla.width-1650.jpg"}}
                                    style={{
                                        width: 323,
                                        height: 160,
                                        marginRight: 10,
                                        borderRadius: 20,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.H4,
                                    lineHeight: 32 * 1.2,
                                    color: COLORS.black
                                }}>{item.company_name}</Text>
                            </TouchableOpacity>

                        );
                    }}
                />
            </View>
        );
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle="light-content"/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
                {renderHeader()}
                {/*{renderCategories()}*/}
                {renderHotOffers()}
                {renderPopularRestaurants()}
            </ScrollView>
        </View>
    );
}
