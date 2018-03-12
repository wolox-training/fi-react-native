import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import App from './src/Screens/App';
import Books from './src/Screens/Books';

const navigationRoutes = {
  TodoList: () => ({title: 'Todo List'}),
  Books: () => ({title: 'Books'})
}

const Routes = TabNavigator(
  {
  Home: { screen: App, navigationOptions: navigationRoutes.TodoList},
  Settings: { screen: Books, navigationOptions: navigationRoutes.Books},
 },
 {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: {
      backgroundColor: '#999'
    },
    style: {
      backgroundColor: 'skyblue'
    }
  }
 }
);

const Navigator = StackNavigator(
  {
    FirstHome: { screen: Routes}
   },{
     navigationOptions: {
      headerStyle: {
        backgroundColor: 'skyblue'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center'
      }
     }
   }
  );

export default Navigator;