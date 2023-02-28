import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {AndroidSafeArea, COLORS, FONTS} from "../constants";
import {Platform, SafeAreaView, Text, TouchableOpacity} from "react-native";
import {Button, Header, InputField} from "../components";
import {CheckSvg} from "../svg";
import DateTimePicker from '@react-native-community/datetimepicker';


const UserInfo = () => {
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date(1676419200));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(event)
    };

    const showMode = (currentMode: any) => {
        if (Platform.OS === 'android') {
            setShow(true);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    function renderHeader() {
        return (
            <Header
                title="Step 1"
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
                    Personal info
                </Text>
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="First name"
                    placeholder="Darlene"
                    icon={<CheckSvg/>}
                />
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Last name"
                    placeholder="Robertson"
                    icon={<CheckSvg/>}
                />
                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Email address"
                    placeholder="xyz@mail.com"
                    secureTextEntry={true}
                    icon={<CheckSvg/>}
                />
                <TouchableOpacity onPress={
                    showDatepicker
                }>
                    <Text style={{marginTop: 10, marginBottom: 30}}>Date of Birth {date.toLocaleString()}</Text>
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

                <InputField
                    containerStyle={{marginBottom: 30}}
                    title="Screen Name"
                    placeholder="Robertson"
                    secureTextEntry={true}
                    icon={<CheckSvg/>}
                />

                <Button
                    title="Next"
                    containerStyle={{marginBottom: 20}}
                    onPress={() => navigation.navigate("UserAddress" as never)}
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

export default UserInfo;
