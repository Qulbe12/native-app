import React from 'react';
import {AndroidSafeArea, COLORS, FONTS} from "../constants";
import {SafeAreaView, Text, View} from "react-native";
import {Button, Header, InputField} from "../components";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CheckSvg} from "../svg";
import {useNavigation} from "@react-navigation/native";
import PhoneInput from "react-native-phone-input";

const UserAddress = () => {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <Header
                title="Enter your complete address"
                goBack={true}
                onPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                    paddingTop: 20,
                    paddingBottom: 20,
                }}
            >
                <Text
                    style={{
                        marginBottom: 54,
                        ...FONTS.H1,
                        color: COLORS.black,
                    }}
                >
                    Complete address
                </Text>
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Street number"
                    placeholder="#"
                    icon={<CheckSvg/>}
                />
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Street name"
                    placeholder="Street"
                    icon={<CheckSvg/>}
                />
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="City"
                    placeholder="City"
                    secureTextEntry={true}
                    icon={<CheckSvg/>}
                />

                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Country"
                    placeholder="Country"
                    secureTextEntry={true}
                    icon={<CheckSvg/>}
                />
                <View style={{marginBottom: 30}}>
                    <Text
                        style={{
                            ...FONTS.Lato_400Regular,
                            fontSize: 12,
                            textTransform: 'uppercase',
                            marginBottom: 11,
                            color: COLORS.gray,
                        }}>
                        phone number
                    </Text>
                    <PhoneInput
                        style={{
                            // @ts-ignore
                            fontSize: 16,
                            fontFamily: 'Lato-Regular',
                            borderBottomWidth: 1,
                            borderBottomColor: '#E2E2E2',
                            paddingBottom: 10,
                        }}
                        placeholderTextColor={COLORS.black}
                        initialCountry={'us'}
                        // initialValue="0123456789"
                    />
                </View>

                <Button
                    title="Next"
                    containerStyle={{marginBottom: 20}}
                    onPress={() => navigation.navigate("VerifyPhoneNumber" as never)}
                />
                {/*<View*/}
                {/*    style={{*/}
                {/*        flexDirection: "row",*/}
                {/*        alignItems: "center",*/}
                {/*        marginBottom: 63,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Text style={{color: COLORS.gray, ...FONTS.bodyText}}>*/}
                {/*        Already have an account?{" "}*/}
                {/*    </Text>*/}
                {/*    <TouchableOpacity*/}
                {/*        onPress={() => navigation.navigate("SignIn" as never)}*/}
                {/*    >*/}
                {/*        <Text*/}
                {/*            style={{*/}
                {/*                textAlign: "right",*/}
                {/*                ...FONTS.bodyText,*/}
                {/*                color: COLORS.carrot,*/}
                {/*                lineHeight: 16 * 1.5,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            Sign in.*/}
                {/*        </Text>*/}
                {/*    </TouchableOpacity>*/}
                {/*</View>*/}
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
};

export default UserAddress;
