import React, { Component } from 'react';
import { createStore } from '../node_modules/redux';
import { Provider } from 'react-redux';
import { reducer } from './Redux/Reducer';
import './App.css';
import SiteView from './Components/SiteView';
import OutputArea from './Components/OutputArea';
import StyleSelector from './Components/StyleSelector';


const store = createStore( 
  reducer,
);


class App extends Component {
  render() {

    return (

     <Provider store={store}>
      <div className="app">

        <div className="view-block">
          <SiteView />
        </div>
        <div  className="control-block">          
          <StyleSelector />
          <OutputArea />
        </div>

      </div>
     </Provider>
    );
  }
}

export default App;
