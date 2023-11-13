import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Paypal from '../../assets/svgs/Paypal.svg';
import Stripe from '../../assets/svgs/Stripe.svg';
import { style } from './PaymentMethodStyle';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const PaymentMethod = () => {
    const [selectedRadioPayment, setSelectedRadioPayment] = useState(1);

    return (
        <View style={style.main}>
            <Text style={style.headingText}>Payment Detail</Text>
            <Text style={style.lightText}>Please enter your payment method</Text>

            <TouchableOpacity
                onPress={() => setSelectedRadioPayment(1)}
                activeOpacity={0.4}
                style={{ width: '100%' }}>
                <View style={style.paymentDetailsButton}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...style.radio, marginEnd: CHANGE_BY_MOBILE_DPI(10), marginTop: CHANGE_BY_MOBILE_DPI(3) }}>
                            {selectedRadioPayment === 1 ? (
                                <View style={style.radioBg}></View>
                            ) : null}
                        </View>
                        <Text
                            style={style.paymentText}>
                            PayPal
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Paypal />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setSelectedRadioPayment(2)}
                activeOpacity={0.4}
                style={{ width: '100%' }}>
                <View style={style.paymentDetailsButton}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...style.radio, marginEnd: CHANGE_BY_MOBILE_DPI(10), marginTop: CHANGE_BY_MOBILE_DPI(3) }}>
                            {selectedRadioPayment === 2 ? (
                                <View style={style.radioBg}></View>
                            ) : null}
                        </View>
                        <Text
                            style={style.paymentText}>
                            Stripe
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Stripe />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setSelectedRadioPayment(3)}
                activeOpacity={0.4}
                style={{ width: '100%' }}>
                <View style={style.paymentDetailsButton}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ ...style.radio, marginEnd: CHANGE_BY_MOBILE_DPI(10), marginTop: CHANGE_BY_MOBILE_DPI(3) }}>
                            {selectedRadioPayment === 3 ? (
                                <View style={style.radioBg}></View>
                            ) : null}
                        </View>
                        <Text
                            style={style.paymentText}>
                            Netbanking
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentMethod;

