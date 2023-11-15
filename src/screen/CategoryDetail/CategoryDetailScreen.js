import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CircleIncrementButton from '../../components/Button/CircleIncrementButton';
import RatingComponent from '../../components/RatingStar';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import { CategoryDetailHooks } from './CategoryDetailHooks';
import { styles } from './CategoryDetailStyle';
import { Colors } from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import CustomTopTabs from '../../navigation/CustomTopTabs/CustomTopTab';
import { STATIC_DATA } from '../../global/staticdata';

const CategoryDetailScreen = ({ route }) => {
  const { name } = route.params;
  const { categoryData, renderItem, handleGoBack, navigateToFilterPage } = CategoryDetailHooks();
  return (
    <View style={styles.main}>
      <FocusAwareStatusBar barColor={Colors.GRAY_LIGHT} />
      <SearchAppBar
        title={name}
        showIcon={true}
        showSearchIcon={true}
        showFilter={true}
        onFilterPress={navigateToFilterPage}
        showCartCount={true}
        onPress={() => {
          handleGoBack();
        }}
      />
      <CustomTopTabs
        externalMainContainerStyle={styles.externalMainContainerStyle}
        externalHeaderItem={styles.externalHeaderItem}
        topTabData={STATIC_DATA.categoryTopTabData}
        CustomTabItem={
          <View style={styles.listWrapper}>
            <FlatList
              data={categoryData}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              numColumns={2}
            />
          </View>
        }
      />
    </View>
  );
};

export default CategoryDetailScreen;
