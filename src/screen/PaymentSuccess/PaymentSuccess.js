import React from 'react-native';
import { View, Text, ScrollView } from 'react-native';
import { style } from './PaymentSuccessStyle';

import SuccessTick from '../../assets/svgs/SuccessTick.svg';
import CommonButton from '../../components/Button/CommonButton';
const PaymentSuccess = () => {
    return (
        <View style={style.container}>
            <View style={style.mainView}>
                <SuccessTick />
                <Text style={style.received}>Order Received</Text>
                <Text style={style.time}>This order will be delivered within 5 working days</Text>
            </View>
            <CommonButton title={'Continue Shopping'}
            
            
            />
        </View>
    )
}

export default PaymentSuccess;