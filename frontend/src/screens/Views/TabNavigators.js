import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import CardViewScreen from './Layout/CardViewScreen';
import ConversationChat from './Layout/ConversationChat';
import FindingScreen from './Layout/FindingScreen';
import OutStandingActivity from './Layout/OutStandingActivity';
import PersonalPage from './Layout/PersonalPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TabNavigators = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const getTabBarVisibility = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'QrCodeMain';

    if (routeName === 'QrCodeContainer') {
      return false;
    }

    return true;
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'rgb(255, 102, 100)',
        tabBarInactiveTintColor: '#000000',

        tabBarStyle: {
          height: '6.5%',
          backgroundColor: 'rgb(239, 242, 251)',
        },
        tabBarLabelStyle: {
          fontSize: 13, // Kích thước của chữ
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconComponent;

          if (route.name === 'CardViewScreen') {
            iconName = focused ? 'tinder' : 'tinder';
            color = focused ? 'rgb(255, 102, 100)' : 'rgb(123, 133, 146)';
            iconComponent = (
              <Fontisto name={iconName} size={27} color={color} />
            );
          } else if (route.name === 'FindingScreen') {
            iconName = focused ? 'table-search' : 'table-search';
            color = focused ? 'rgb(255, 102, 100)' : 'rgb(123, 133, 146)';
            iconComponent = (
              <MaterialCommunityIcons name={iconName} size={27} color={color} />
              
            );

          } else if (route.name === 'OutStandingActivity') {
            iconName = focused ? 'cards-diamond' : 'cards-diamond';
            color = focused ? 'rgb(255, 102, 100)' : 'rgb(123, 133, 146)';
            iconComponent = (
              <MaterialCommunityIcons name={iconName} size={27} color={color} />
            );

          } else if (route.name === 'ConversationChat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles';
            color = focused ? 'rgb(255, 102, 100)' : 'rgb(123, 133, 146)';
            iconComponent = (
              <Ionicons name={iconName} size={27} color={color} />
            );

          } else if (route.name === 'PersonalPage') {
            iconName = focused ? 'user' : 'user';
            color = focused ? 'rgb(255, 102, 100)' : 'rgb(123, 133, 146)';
            iconComponent = (
              <FontAwesome name={iconName} size={27} color={color} />
            );
          }

          return iconComponent;
        },
      })}>
      <Tab.Screen
        name="CardViewScreen"
        component={CardViewScreen}
        options={{tabBarLabel: 'Trang chủ', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="FindingScreen"
        component={FindingScreen}
        options={{tabBarLabel: 'Tìm', tabBarShowLabel: false}}
      />

      <Tab.Screen
        name="OutStandingActivity"
        component={OutStandingActivity}
        options={{tabBarLabel: 'Người dùng nổi bật', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="ConversationChat"
        component={ConversationChat}
        options={{tabBarLabel: 'Nhắn tin', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="PersonalPage"
        component={PersonalPage}
        options={{tabBarLabel: 'Tôi', tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({});
