//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import * as UserAction from './src/redux/actions/userActions'
import axios from 'axios';
import BoppoLogo from './src/assets/svgs/LogoSvg.svg'
import { Colors } from './src/global';
import { SET_BLACK, SET_GRAY, SET_PRIMARY, SET_WHITE } from './src/global/colors';

const DataSetInRedux = ({ children }) => {
    const dispatch = useDispatch()
    const [dataLoaded, setDataLoaded] = React.useState(false);
    const getTheme = async () => {
        let themeUrl = `http://stage-api.boppogo.com/auth/api/v1/customer/shop-customer-theme`
        const response = await axios.get(themeUrl)
        const PrimaryColorFormater = response.data?.data?.getShopTheme?.colors?.primaryColor?.match(/^(\d+),(\d+),(\d+)$/) ? `rgb(${response.data?.data?.getShopTheme?.colors?.primaryColor})` : response.data?.data?.getShopTheme?.colors?.primaryColor.startsWith("#") ? response.data?.data?.getShopTheme?.colors?.primaryColor : `#${response.data?.data?.getShopTheme?.colors?.primaryColor}`;
        const SecandryColorFormater = response.data?.data?.getShopTheme?.colors?.primaryColor?.match(/^(\d+),(\d+),(\d+)$/) ? `rgb(${response.data?.data?.getShopTheme?.colors?.secondaryColor})` : response.data?.data?.getShopTheme?.colors?.secondaryColor.startsWith("#") ? response.data?.data?.getShopTheme?.colors?.secondaryColor : `#${response.data?.data?.getShopTheme?.colors?.secondaryColor}`;
        const TernaryColorFormater = response.data?.data?.getShopTheme?.colors?.primaryColor?.match(/^(\d+),(\d+),(\d+)$/) ? `rgb(${response.data?.data?.getShopTheme?.colors?.ternaryColor})` : response.data?.data?.getShopTheme?.colors?.ternaryColor.startsWith("#") ? response.data?.data?.getShopTheme?.colors?.ternaryColor : `#${response.data?.data?.getShopTheme?.colors?.ternaryColor}`;
        const QauternaryColorFormater = response.data?.data?.getShopTheme?.colors?.primaryColor?.match(/^(\d+),(\d+),(\d+)$/) ? `rgb(${response.data?.data?.getShopTheme?.colors?.quaternaryColor})` : response.data?.data?.getShopTheme?.colors?.quaternaryColor.startsWith("#") ? response.data?.data?.getShopTheme?.colors?.quaternaryColor : `#${response.data?.data?.getShopTheme?.colors?.quaternaryColor}`;
        let primaryColor = response.data?.data?.getShopTheme?.colors?.primaryColor ?  PrimaryColorFormater : Colors.PRIMARY
        let secondaryColor = response.data?.data?.getShopTheme?.colors?.secondaryColor ? SecandryColorFormater : Colors.BLACK
        let ternaryColor = response.data?.data?.getShopTheme?.colors?.ternaryColor ? TernaryColorFormater : Colors.WHITE
        let quaternaryColor = response.data?.data?.getShopTheme?.colors?.quaternaryColor ? QauternaryColorFormater : Colors.GRAY_MEDIUM
        SET_PRIMARY(primaryColor)
        SET_BLACK(secondaryColor)
        SET_WHITE(ternaryColor)
        SET_GRAY(quaternaryColor)
        dispatch(UserAction.setAppData({
            primaryColor: primaryColor,
            secondaryColor: secondaryColor,
            ternaryColor: ternaryColor,
            quaternaryColor: quaternaryColor,
            appLogo: (height, width) => response.data?.data?.getShopTheme?.main_logo_url ? <Image source={{ uri: response.data?.data?.getShopTheme?.main_logo_url }} style={{ height: height, width: width }} /> : <BoppoLogo height={height} width={width} />
        }))
        setDataLoaded(true)
    }
    
 
    React.useEffect(() => {
        getTheme()
    }, [])
    return dataLoaded ? <>{children}</> : null;
};
export default DataSetInRedux;