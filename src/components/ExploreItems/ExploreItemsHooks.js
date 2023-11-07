const {TouchableOpacity, Image, View, Text} = require('react-native');
import {styles} from './ExploreItemsStyles';
import {useNavigation} from '@react-navigation/native';
import {ScreenName, ScreenNames} from '../../global/index';

const ExploreItemHooks = () => {
  const data = [
    {
      key: '1',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '2',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '3',
      image: require('../../assets/images/coffee.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    {
      key: '4',
      image: require('../../assets/images/dettol.png'),
      name: 'Nescafe gold Cappuccino Coffee 8 Sachets X 15.5g',
      price: '18.44',
      discountPrice: '18.44',
      percent: '20',
    },
    // Add more items as needed
  ];

  const navigation = useNavigation();
  const navigateToProductDetail = () => {
    navigation.navigate(ScreenNames.PRODUCT_DETAIL_VIEW_SCREEN);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={navigateToProductDetail}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text
        style={{color: 'black', fontSize: 13, fontWeight: 500, marginTop: 15}}>
        {item.name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={{color: 'black', fontSize: 14, fontWeight: 600}}>
          ${item.price}
        </Text>
        <Text
          style={{
            color: '#888888',
            fontSize: 12,
            fontWeight: 400,
            textDecorationLine: 'line-through',
          }}>
          ${item.discountPrice}
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 12,
            fontWeight: 700,
            color: '#E50404',
          }}>
          {item.percent}% OFF
        </Text>
      </View>
      <View style={styles.circularButtonContainer}>
        {/* <ProductHomeBottomSheet /> */}
      </View>
    </TouchableOpacity>
  );

  return {
    data,
    renderItem,
  };
};

export {ExploreItemHooks};
