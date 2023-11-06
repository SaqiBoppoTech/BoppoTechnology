import React from 'react';
import {View, Text, Image, FlatList, Button} from 'react-native';
import {styles} from './CancelReturnStyles';

const CancelReturnScreen = () => {
  const data = [
    {
      key: '1',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '2',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '3',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '4',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5 ',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '5',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '6',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '7',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Coffee Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
    },
    {
      key: '8',
      image:
        'https://res.cloudinary.com/dawhb2mne/image/upload/v1698040599/haridwar-mart-bru-coffee_xkr9a1.png',
      name: 'Dettol Products',
      des: ' Kinder Happy Hippo Cocoa Cream 5',
      productCount: '2',
      paid: '76.99',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.alignContent}>
        <View style={styles.imgWrapper}>
          <Image source={{uri: item.image}} style={styles.imgcontainer} />
        </View>
        <View style={styles.colWrapper}>
          <Text style={styles.name}> {item.name} </Text>
          <Text style={styles.description}> {item.des} </Text>

          <Text style={styles.count}>
            This order has{item.productCount} products
          </Text>
          <Text style={styles.count}> Rate this product</Text>

          <Text style={styles.price}> Paid {item.paid} USD </Text>

          <View style={{width: 200, height: 40}}>
            <Button
              title="Buy Again"
              color="black"
              onPress={() => alert('Button pressed')}
            />
          </View>
        </View>

        <Button
          title="Buy Again"
          color="black"
          onPress={() => alert('Button pressed')}
        />
      </View>
      <View style={styles.border}></View>
      <View>
        <Text style={styles.cancelWrapper}>
          {' '}
          View Cancelled/Returned Detail
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.background}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CancelReturnScreen;
