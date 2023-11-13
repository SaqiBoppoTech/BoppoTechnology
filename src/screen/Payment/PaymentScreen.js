import React from 'react-native'
import { PaymentHooks } from './PaymentHooks'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import CommonButton from '../../components/Button/CommonButton';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../global';

const PaymentScreen = () => {
    // const { currentTab, setCurrentTab, tabs, tab_conetnt, handleGoBack } =
    //     PaymentHooks();


    return (
        <View style={{backgroundColor:Colors.WHITE,flex:1}}> 
       <View style={{flex:1}}>
                <PaymentDetails />
                <PaymentMethod />
       </View>
            <CommonButton
            title={'Pay'}
            />
            </View>

    );
}

export default PaymentScreen;

