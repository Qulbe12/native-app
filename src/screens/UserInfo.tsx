import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
// @ts-ignore
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {AndroidSafeArea, COLORS, FONTS} from "../constants";
import {Platform, SafeAreaView, Text, TouchableOpacity} from "react-native";
import {Button, Header, InputField} from "../components";
import {CheckSvg} from "../svg";
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAppDispatch} from "../redux/Store";
import {stepOne} from "../redux/authSlice";
import * as yup from "yup";
import {FormControl} from "native-base";

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    screenName: yup.string().required(),
});

const UserInfo = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation();
    const [date, setDate] = useState(new Date(1676419200));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        screenName: ""
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onClick = () => {
        schema
            .validate(form)
            .then(() => {
                dispatch(stepOne(form))
                navigation.navigate("UserAddress" as never)
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
            });

    }

    useEffect(() => {
        setErrors({});
    }, [form]);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(selectedDate.toString())
        setForm({...form, dateOfBirth: selectedDate.toString()})
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
                title="Step 2"
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
                <FormControl isInvalid={!!errors.firstName}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="First name"
                        placeholder="Darlene"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, firstName: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.firstName}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Last name"
                        placeholder="Robertson"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, lastName: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.lastName}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Email address"
                        placeholder="xyz@mail.com"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, email: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                </FormControl>
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
                <FormControl isInvalid={!!errors.screenName}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Screen Name"
                        placeholder="Robertson"
                        secureTextEntry={true}
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, screenName: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.screenName}</FormControl.ErrorMessage>
                </FormControl>
                <Button
                    title="Next"
                    containerStyle={{marginBottom: 20}}
                    onPress={onClick}
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
