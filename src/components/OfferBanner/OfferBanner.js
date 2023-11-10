import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './OfferBannerStyle';
import { STATIC_DATA } from '../../global/staticdata';
import { OfferHooks } from './OfferBannerHooks';

const OfferBanner = () => {
    const {renderOfferItem} = OfferHooks()
    return (
        <View style={styles.OfferBannerContainer}>
           <FlatList horizontal data={STATIC_DATA.offerBannerData} renderItem={renderOfferItem}/>
        </View>
    );
};
export default OfferBanner;
