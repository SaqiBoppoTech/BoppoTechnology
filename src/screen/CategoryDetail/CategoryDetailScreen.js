import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import { CategoryDetailHooks } from './CategoryDetailHooks';
import { styles } from './CategoryDetailStyle';
import { Colors } from '../../global';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import { STATIC_DATA } from '../../global/staticdata';


const CategoryDetailScreen = ({ route }) => {
  const { name } = route.params;
  const {  renderItem, handleGoBack, navigateToFilterPage,renderItemTopTab } = CategoryDetailHooks();
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
      <View>
        <FlatList horizontal data={STATIC_DATA.categoryDetailTopTabData} renderItem={renderItemTopTab} contentContainerStyle={styles.contentContainerStyle} />
      </View>
        <View style={styles.listWrapper}>
            <FlatList
              data={STATIC_DATA.categoryData}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              numColumns={2}
            />
          </View>
    </View>
  );
};

export default CategoryDetailScreen;
