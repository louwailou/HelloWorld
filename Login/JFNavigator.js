import React,{Component} from 'react';
import {StyleSheet,Text,View,Navigator} from 'react-native';
import LoginView from './LoginView';

export default class JFNav {
  
  render() {
    let defaultName = 'loginView';
    let defaultComponent = JFLoginView
    return (
      <Navigator  initialRoute = {{name:defaultName,component:defaultComponent}}
       configureScene={(route) => {
         return Navigator.Sceneconfigs.VerticalDownSwipeJump;
       }}
       renderScene={(route,nav)=>{
         let aComponent = route.component;
         return <aComponent {...route.params} navigator = {nav} />
       }}
       />

    )
  }
}
