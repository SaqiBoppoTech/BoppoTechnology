/**
 * @format
 */

import {AppRegistry, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (TouchableOpacity.defaultProps) {
    TouchableOpacity.defaultProps.activeOpacity = 0.8;
} else {
    TouchableOpacity.defaultProps = {};
    TouchableOpacity.defaultProps.activeOpacity = 0.8;
}
if (ScrollView.defaultProps) {
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
} else {
    ScrollView.defaultProps = {};
    ScrollView.defaultProps.showsHorizontalScrollIndicator = false;
    ScrollView.defaultProps.showsVerticalScrollIndicator = false;
}
if (FlatList.defaultProps) {
    FlatList.defaultProps.keyboardShouldPersistTaps = "always";
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
} else {
    FlatList.defaultProps = {};
    FlatList.defaultProps.keyboardShouldPersistTaps = "always";
    FlatList.defaultProps.showsHorizontalScrollIndicator = false;
    FlatList.defaultProps.showsVerticalScrollIndicator = false;
}
AppRegistry.registerComponent(appName, () => App);
