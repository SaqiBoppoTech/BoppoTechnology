import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SearchAppBar from '../../components/AppBar/SearchAppBar/SearchAppBar';
import FocusAwareStatusBar from '../../components/AppBar/FocusAwareStatusBar';
import MyReviewCommonComponent from '../../components/MyReviewCommonComponent/MyReviewCommonComponent';
import {styles} from './MyReviewsStyle';
import Remove from '../../assets/svgs/Remove.svg';
import MyReviewHooks from './MyReviewsHooks';
import {STATIC_DATA} from '../../global/staticdata';
import {CHANGE_BY_MOBILE_DPI} from '../../global/constant';
import {Colors} from '../../global';

const MyReviewsScreen = () => {
  const {handleGoBack, onRemovePress, navigateToProductDetail} =
    MyReviewHooks();

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <MyReviewCommonComponent
        productImage={item.image}
        initialRating={item.rate}
        productName={item.name}
      />
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.line}></View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.editWrapper}
          onPress={navigateToProductDetail}>
          <Text style={styles.optionText}>View</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
        <TouchableOpacity style={styles.removeWrapper} onPress={onRemovePress}>
          <Remove
            width={CHANGE_BY_MOBILE_DPI(15)}
            height={CHANGE_BY_MOBILE_DPI(15)}
          />
          <Text style={styles.optionText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar barColor={Colors.CONCRETE} />
      <SearchAppBar title={'My Reviews'} onPress={handleGoBack} />
      <FlatList
        data={STATIC_DATA.myReviewData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyReviewsScreen;
