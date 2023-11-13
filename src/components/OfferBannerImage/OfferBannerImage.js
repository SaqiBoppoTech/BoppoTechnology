import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './OfferBannerImageStyle';
import { STATIC_DATA } from '../../global/staticdata';
import { OfferBannerImageHooks } from './OfferBannerImageHooks';

const OfferBannerImage = () => {
    const {renderOfferItem} = OfferBannerImageHooks()
    return (
        <View style={styles.OfferBannerContainer}>
           <FlatList horizontal data={STATIC_DATA.offerBannerData} renderItem={renderOfferItem}/>
        </View>
    );
};
export default OfferBannerImage;
