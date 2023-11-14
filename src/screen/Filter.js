// import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
// import React, {useState} from 'react';
// import FilterType from '../components/FilterType/FilterTypeScreen';
// import SearchAppBar from '../components/AppBar/SearchAppBar/SearchAppBar';
// import {useNavigation} from '@react-navigation/native';
// import Brand from '../components/BrandFilter/BrandScreen';

// const Filter = () => {
//   const DATA = [
//     {
//       id: '1',
//       title: 'Sort',
//     },
//     {
//       id: '2',
//       title: 'Price',
//     },
//     {
//       id: '3',
//       title: 'Brand',
//     },
//     {
//       id: '4',
//       title: 'Customer \nRating',
//     },
//     {
//       id: '5',
//       title: 'Categories',
//     },
//     {
//       id: '6',
//       title: 'Availaibility',
//     },
//     {
//       id: '7',
//       title: 'Discount',
//     },
//   ];

//   const [filter, setFilter] = useState(0);

//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity onPress={() => setFilter(item.id)}>
//         <View>
//           <FilterType filterTypeName={item} selectedId={filter} />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const redirect = useNavigation();
//   const handleGoBack = () => {
//     redirect.goBack();
//   };

//   return (
//     <View style={{flex: 1}}>
//       <SearchAppBar
//         title="Filter"
//         onPress={() => {
//           handleGoBack();
//         }}
//       />
//       <View style={style.main}>
//         <View style={style.filterType}>
//           <FlatList
//             data={DATA}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//           />
//         </View>
//         <View style={style.filterContent}>
//           {filter == 1 ? (
//             <Text>SORT</Text>
//           ) : filter == 2 ? (
//             <Text>PRICE</Text>
//           ) : filter == 3 ? (
//             <Brand />
//           ) : filter == 4 ? (
//             <Text>CUSTOMER RATING</Text>
//           ) : filter == 5 ? (
//             <Text>CATEGORIES</Text>
//           ) : filter == 6 ? (
//             <Text>Availaibility</Text>
//           ) : filter == 7 ? (
//             <Text>Discount</Text>
//           ) : (
//             ''
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   main: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   filterType: {
//     backgroundColor: '#dddddd',
//     flex: 1.3,
//   },
//   filterContent: {
//     flex: 2,
//   },
// });

// // const FilterTypeComponent = text => {
// //   return <Text>{text}</Text>;
// // };

// export default Filter;
