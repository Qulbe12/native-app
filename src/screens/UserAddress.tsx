import React, {useEffect, useState} from 'react';
import {AndroidSafeArea, COLORS, FONTS} from "../constants";
import {SafeAreaView, Text, View} from "react-native";
import {Button, Header, InputField} from "../components";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {CheckSvg} from "../svg";
import {useNavigation} from "@react-navigation/native";
import PhoneInput from "react-native-phone-input";
import {useAppDispatch, useAppSelector} from "../redux/Store";
import {signUpAction} from "../redux/actions/authAction";
import * as yup from "yup";
import {FormControl} from "native-base";

const schema = yup.object().shape({
    streetNumber: yup.string().required(),
    streetName: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    phone: yup.string().required(),
});

const UserAddress = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth)
    const {stepOne, stepTwo, register} = useAppSelector(state => state.auth)
    const [form, setForm] = useState({
        streetNumber: "",
        streetName: "",
        city: "",
        country: "",
        phone: ""
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({});


    const onClick = () => {
        schema
            .validate(form)
            .then(() => {
                dispatch(signUpAction({
                    first_name: stepOne.firstName,
                    last_name: stepOne.lastName,
                    username: register.name,
                    email: stepOne.email,
                    mobile: stepTwo.phone,
                    password: register.password,
                    address: form.streetName,
                    photo: "any",
                    user_type_id: Math.floor(Math.random() * 100),
                    status: Math.floor(Math.random() * 10),
                    web_token: Math.floor(Math.random() * 20)
                }))
                console.log(stepTwo, stepOne, register)
                console.log(stepOne, register)
                console.log(user)
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
            });
    }

    useEffect(() => {
        setErrors({});
    }, [form]);

    function renderHeader() {
        return (
            <Header
                title="Step 3"
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
                <FormControl isInvalid={!!errors.streetNumber}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Street number"
                        placeholder="#"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, streetNumber: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.streetNumber}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.streetName}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Street name"
                        placeholder="Street"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, streetName: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.streetName}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.city}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="City"
                        placeholder="City"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, city: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.city}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.country}>
                    <InputField
                        containerStyle={{marginBottom: 30}}
                        title="Country"
                        placeholder="Country"
                        icon={<CheckSvg/>}
                        onchange={(v: string) => {
                            setForm({...form, country: v})
                        }}
                    />
                    <FormControl.ErrorMessage>{errors.country}</FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.phone}>
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
                            onChangePhoneNumber={(v) => {
                                setForm({...form, phone: v})
                            }}
                            // initialValue="0123456789"
                        />
                    </View>
                    <FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>
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

export default UserAddress;
