import React,{Component} from 'react';
import {View,Navigator,TouchableOpacity,Text} from 'react-native';
import SecondPageComponent from './SecondPageComponent';
export default class FirstPageComponent extends Component {
    constructor(props){
        super(props);
        this.state = {id:2,
        user:null,    
        };
    }
    _pressButton(){
        let _this = this;
        const {navigator} = this.props;
        if(navigator){
            navigator.push({
                name:'SecondPageComponent',
                component:SecondPageComponent,
                params:{
                    id:this.state.id,
                    getUser:function(user) {
                        _this.setState({user:user})
                    }
                }
            });
        }
    }

    render(){
      if( this.state.user ) {
            return(
                <View  style = {{flexDirection:'row', height:100,marginTop:100,justifyContent:'center',alignItems:'flex-start',}}>
                    <Text > first page 用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            );
        }else {
            return(
                <View  style = {{flexDirection:'row', height:100,marginTop:100,justifyContent:'center',alignItems:'flex-start',}}>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text> first page 查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }


    }
}
