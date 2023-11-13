import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { style } from './PaymentDetailsStyle';
import { Colors, Fonts } from '../../global';

const PaymentComponent = ({ type, price }) => {
    return (
        <View style={style.typeWrapper}>
            <Text style={style.type}>{type}</Text>
            <Text style={style.price}>{price}</Text>
        </View>
    );
};

const PaymentDetails = () => {
    return (

        <View style={{ backgroundColor: '#F9F9F9', margin: CHANGE_BY_MOBILE_DPI(18), borderRadius: CHANGE_BY_MOBILE_DPI(5), height: CHANGE_BY_MOBILE_DPI(260) }}>
            <Text
                style={{
                    fontSize: CHANGE_BY_MOBILE_DPI(18),
                    fontFamily:Fonts.MANROPE_MEDIUM,
                    color: Colors.BLACK,
                    marginLeft: CHANGE_BY_MOBILE_DPI(30),
                    marginTop: CHANGE_BY_MOBILE_DPI(10),
                    marginBottom: CHANGE_BY_MOBILE_DPI(12),
                }}>
                Payment Detail
            </Text>
            <PaymentComponent type={'Product Cost'} price={'36.99 USD'} />
            <PaymentComponent type={'Discount'} price={'-20.00 USD'} />
            <PaymentComponent type={'Tax'} price={'3.11 USD'} />
            <PaymentComponent type={'Shipping Cost'} price={'10.21 USD'} />
            <View
                style={style.totalContainer}>
                <Text style={style.type}>Total Amount</Text>
                <Text style={style.total}>30.31 USD</Text>
            </View>
        </View>

    );
};

export default PaymentDetails;


