import React,{Component} from 'react';
import { View,Navigator} from 'react-native';
import FirstPageComponent from './FirstPageComponent';
export default class Sample extends Component {
    render(){
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
          <Navigator initialRoute= {{
              name:defaultName,component:defaultComponent
          }}
          configureScene = {(route)=>{
              return Navigator.SceneConfigs.VerticalUpSwipeJump;
          }}
          renderScene= {(route,navigator)=>{
              let Comp = route.component;
              return <Comp {...route.params} navigator= {navigator} />
          }}
          />
        );
    }
}


/*


关于{...route.params}再提问

return <Component {...route.params} navigator={navigator} />
这里的{...route.params}是展开给<Component />组件传递 props。

那么这就有点反智，我们并不需要给defaultComponent传递信息(除了navigator)，而是需要给第二个页面传递属性。

写到这里，恍然大悟，醍醐灌顶。

原来renderScene渲染的是所有的 component，即使第一个页面不需要传递params也应该给其加上，以打开后来页面信息交流的渠道。第一个页面的params展开后没有任何内容，相当于没有写，可以忽略。


*/