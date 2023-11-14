import React from 'react-native'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import CommonButton from '../../components/Button/CommonButton';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../global';
import { PaymentHooks } from './PaymentHooks';
import { styles } from './PaymentScreenStyle';

const PaymentScreen = () => {

    const { handleGoBack,
        orderReceivedSuccess } = PaymentHooks();

    return (
        <View style={styles.mainView}> 
       <View style={styles.centerView}>
                <PaymentDetails />
                <PaymentMethod />
       </View>
            <CommonButton
            title={'Pay'}
                onPress={orderReceivedSuccess}
            />
            </View>

    );
}

export default PaymentScreen;

