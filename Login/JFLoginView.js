import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import EditView from './JFEditView';
import LoginButton from './JFLoginButton';
import LoginSuccess from './JFLoginSuccess';


export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.userName = '';
    this.userPassword = '';
  }
  render() {
    return (
      <View style = {LoginStyles.loginview}>
        <View style = {{flexDirection:'row', height:100,marginTop:1,justifyContent:'center',alignItems:'flex-start',}}>
        <Image source = {require('../img/favicon.png')}/>
      </View>
      <View style={{marginTop:80}}>
       <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
            this.userName = text;
        }}/>
       <EditView name='输入密码' onChangeText={(text) => {
            this.password = text;
        }}/>
        <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
        <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
      </View>
      </View>
    )
  }

  onPressCallback = () => {
   let formData = new FormData();
   formData.append("loginName",this.userName);
   formData.append("pwd",this.password);

     alert(responseText);
     this.onLoginSuccess();



 };

 //跳转到第二个页面去
   onLoginSuccess(){
    const { navigator } = this.props;
    if (navigator) {
      navigator.push({
        name : 'LoginSuccess',
        component : LoginSuccess,
      });
    }
  }

}
const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
      backgroundColor: '#ffffff',
  },
});
