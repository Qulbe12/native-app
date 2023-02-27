import React, {useState} from 'react';
import {useNavigation } from "@react-navigation/native";
// @ts-ignore
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {AndroidSafeArea, COLORS, FONTS, SIZES} from "../constants";
import {Platform, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Button, InputField} from "../components";
import {CheckSvg} from "../svg";
import DateTimePicker from '@react-native-community/datetimepicker';

const UserInfo = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event:any, selectedDate:any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode:any) => {
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                    paddingTop: SIZES.paddingTop,
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
                    Personal info page
                </Text>
                <InputField
                    containerStyle={{ marginBottom: 30 }}
                    title="First name"
                    placeholder="Darlene Robertson"
                    icon={<CheckSvg />}
                />
                <InputField
                    containerStyle={{ marginBottom: 30 }}
                    title="Last name"
                    placeholder="darlenerobertson@mail.com"
                    icon={<CheckSvg />}
                />
                <InputField
                    containerStyle={{ marginBottom: 30 }}
                    title="Email address"
                    placeholder="xyz@mail.com"
                    secureTextEntry={true}
                    icon={<CheckSvg />}
                />
                <TouchableOpacity onPress={showDatepicker}>
                    <Text style={{marginTop:10, marginBottom:20}}>Date of Birth</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={"date"}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}

                <Button
                    title="sign up"
                    containerStyle={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("VerifyPhoneNumber" as never)}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 63,
                    }}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.bodyText }}>
                        Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignIn" as never)}
                    >
                        <Text
                            style={{
                                textAlign: "right",
                                ...FONTS.bodyText,
                                color: COLORS.carrot,
                                lineHeight: 16 * 1.5,
                            }}
                        >
                            Sign in.
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
            {renderContent()}
        </SafeAreaView>
    );
};

export default UserInfo;
