import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
// @ts-ignore
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";
import {useNavigation} from "@react-navigation/native";
import {AndroidSafeArea, COLORS, FONTS, SIZES} from "../../constants";
import {Button, InputField} from "../../components";
import {CheckSvg, EyeOffSvg, FacebookSvg, GoogleSvg, TwitterSvg,} from "../../svg";
// @ts-ignore
import axios from 'axios';
import {useAppDispatch} from "../../redux/Store";
import {signInAction} from "../../redux/actions/authAction";
import * as yup from "yup";
import {FormControl} from "native-base";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required(" Password is required"),
});

export default function SignIn() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const dispatch = useAppDispatch()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onSubmit = () => {
        schema
            .validate(form)
            .then(() => {
                dispatch(signInAction(form)).catch((err) => console.log(err));
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
            });
    }

    useEffect(() => {
        setErrors({});
    }, [form]);


    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                    paddingTop: SIZES.paddingTop,
                    paddingBottom: 30,
                }}
                showVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        marginBottom: 54,
                        ...FONTS.H1,
                        color: COLORS.black,
                    }}
                >
                    Sign in
                </Text>
                <FormControl mb={30} isInvalid={!!errors.email}>
                    <InputField
                        title="email"
                        placeholder="darlenerobertson@mail.com"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, email: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl mb={20} isInvalid={!!errors.password}>
                    <InputField
                        title="password"
                        placeholder="••••••••"
                        secureTextEntry={true}
                        onchange={(v: string) => {
                            setForm({...form, password: v})
                        }}
                        icon={
                            <TouchableOpacity>
                                <EyeOffSvg/>
                            </TouchableOpacity>
                        }
                    />
                    <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                </FormControl>
                <TouchableOpacity
                    onPress={() => {
                    }}
                >
                    <Text
                        style={{
                            marginBottom: 23,
                            textAlign: "right",
                            ...FONTS.bodyText,
                            color: COLORS.carrot,
                            lineHeight: 16 * 1.5,
                        }}
                    >
                        Forgot your password?
                    </Text>
                </TouchableOpacity>

                <Button

                    title="Sign In"
                    containerStyle={{marginBottom: 20}}
                    onPress={onSubmit}
                />
                <Button
                    title="create account"
                    containerStyle={{
                        marginBottom: 20,
                        backgroundColor: COLORS.lightBlue,
                        // @ts-ignore
                        marginBottom: SIZES.height * 0.1,
                    }}
                    textStyle={{color: COLORS.black}}
                    onPress={() => navigation.navigate("SignUp" as never)}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30,
                    }}
                >
                    <TouchableOpacity style={{marginHorizontal: 7.5}}>
                        <FacebookSvg/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 7.5}}>
                        <TwitterSvg/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 7.5}}>
                        <GoogleSvg/>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
            {renderContent()}
        </SafeAreaView>
    );
}
