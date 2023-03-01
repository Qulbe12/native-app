import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {
    AddNewCard,
    AllOffers,
    Checkout,
    CheckoutFailed,
    CheckoutSuccess,
    ConfirmationCode,
    DishDescription,
    EditProfile,
    Filter,
    ForgotPassword,
    MainLayout,
    MyAddress,
    MyPromocodes,
    OnBoarding,
    Order,
    OrderHistory,
    OrderTracking,
    PasswordHasBeenReset,
    PaymentMethod,
    ResetPassword,
    RestaurantMenu,
    SignIn,
    SignUp,
    VerifyPhoneNumber,
} from "../screens";
import UserInfo from "../screens/UserInfo";
import UserAddress from "../screens/UserAddress";
import {useAppSelector} from "../redux/Store";
import {Spinner} from "native-base";

const Stack = createStackNavigator();

export default function Navigation() {
    const {user , loading, token} = useAppSelector(state => state.auth)
    if (!token) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,
                            borderBottomWidth: 0,
                        },
                        headerShown: false,
                    }}
                    initialRouteName="OnBoarding"
                >
                    <Stack.Screen name="OnBoarding" component={OnBoarding}/>
                    <Stack.Screen name="Order" component={Order}/>
                    <Stack.Screen name="Filter" component={Filter}/>
                    <Stack.Screen
                        name="PasswordHasBeenReset"
                        component={PasswordHasBeenReset}
                    />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />
                    <Stack.Screen name="ResetPassword" component={ResetPassword}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="SignIn" component={SignIn}/>
                    <Stack.Screen name="UserInfoScreen" component={UserInfo}/>
                    <Stack.Screen name="UserAddress" component={UserAddress}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
        if (token){
            return (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                elevation: 0,
                                shadowOpacity: 0,
                                borderBottomWidth: 0,
                            },
                            headerShown: false,
                        }}
                        initialRouteName="MainLayout"
                    >
                        <Stack.Screen
                            name="DishDescription"
                            component={DishDescription}
                        />
                        <Stack.Screen name="Checkout" component={Checkout}/>
                        <Stack.Screen name="EditProfile" component={EditProfile}/>
                        <Stack.Screen
                            name="CheckoutSuccess"
                            component={CheckoutSuccess}
                        />
                        <Stack.Screen name="OrderHistory" component={OrderHistory}/>
                        <Stack.Screen
                            name="CheckoutFailed"
                            component={CheckoutFailed}
                        />
                        <Stack.Screen name="OrderTracking" component={OrderTracking}/>
                        <Stack.Screen name="AllOffers" component={AllOffers}/>
                        <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
                        <Stack.Screen name="AddNewCard" component={AddNewCard}/>
                        <Stack.Screen name="MyAddress" component={MyAddress}/>
                        <Stack.Screen name="MyPromocodes" component={MyPromocodes}/>
                        <Stack.Screen
                            name="RestaurantMenu"
                            component={RestaurantMenu}
                        />
                        <Stack.Screen name="MainLayout" component={MainLayout}/>
                        <Stack.Screen
                            name="ConfirmationCode"
                            component={ConfirmationCode}
                        />
                        <Stack.Screen
                            name="VerifyPhoneNumber"
                            component={VerifyPhoneNumber}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        }



}
