import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';

//引用组件
// import Home from './views/Home';
import Index from './views/login/Index'; 


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <div className="test">
        <BrowserRouter>
          <Switch>  {/*相同路径下只匹配一个*/}  
              <Route component={Index} exact path="/"/>
               
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
