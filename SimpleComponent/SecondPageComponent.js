import React,{Component} from 'react';
import {View,Navigator,TouchableOpacity,Text} from 'react-native';
import FirstPageComponent from './FirstPageComponent';
const USER_MODELS = {
    1: { name: 'mot', age: 23 },
    2: { name: '晴明大大', age: 25 }
};
export default class SecondPageComponent extends Component{
    constructor(props){
     super(props);
     this.state = {id:null};
    }
    _pressButton(){
        const {navigator} = this.props;
         if(this.props.getUser) {
                let user = USER_MODELS[this.props.id];
                this.props.getUser(user);
            }
        if(navigator) {
            navigator.pop();
        }
    }
    componentDidMount(){
        this.setState({id:this.props.id});
    }
    render(){
        return (
            <View  style = {{flexDirection:'row', height:100,marginTop:100,justifyContent:'center',alignItems:'flex-start',}}> 
            <Text>second Page 获得的参数;id = {this.props.id}</Text>
            <TouchableOpacity onPress = {this._pressButton.bind(this)}>
               <Text>返回 </Text>
            </TouchableOpacity>
            </View>
        );
    }

}

/*

关于官方文档里有个东西，这里说一下:

getCurrentRoutes() - 获取当前栈里的路由，也就是push进来，没有pop掉的那些
jumpBack() - 跳回之前的路由，当然前提是保留现在的，还可以再跳回来，会给你保留原样。
jumpForward() - 上一个方法不是调到之前的路由了么，用这个跳回来就好了
jumpTo(route) - Transition to an existing scene without unmounting
push(route) - Navigate forward to a new scene, squashing any scenes that you could jumpForward to
pop() - Transition back and unmount the current scene
replace(route) - Replace the current scene with a new route
replaceAtIndex(route, index) - Replace a scene as specified by an index
replacePrevious(route) - Replace the previous scene
immediatelyResetRouteStack(routeStack) - Reset every scene with an array of routes
popToRoute(route) - Pop to a particular scene, as specified by its route. All scenes after it will be unmounted
popToTop() - Pop to the first scene in the stack, unmounting every other scene


里面有些带参数的XXX(route)，新手第一次看这个文档会疑惑，这个route参数是啥呢，这个route就是:

renderScene={(route, navigator) => 
这里的route，最基本的route就是:

var route = {
    component: LoginComponent
}

*/