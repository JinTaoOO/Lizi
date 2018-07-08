import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Provider} from 'react-redux'   //引入附加包
import {createStore} from 'redux'
////////////////////////////////////////////////////////////////
import App from './App';
import Detail from './components/pageHTML/Detail.js';
import Teste from './components/pageHTML/Teste.js';





 const store =createStore((state={
	 str:"index"    
	 
 },action)=>{
		 switch (action.type){   

	 	case "fnn":                   
	 		return Object.assign({},state,{
				str:action.oo
			});
        case "B":                     
        return Object.assign({},state,{});
		
	 	default:
		return state;   
	  }
 })
ReactDOM.render(
        <Router>
		  <Provider store={store}>
             <div>
	              <Route exact path="/" component={App}/>
				  <Route path="/detail" component={Detail}/>
				  <Route path="/teste" component={Teste}/>
			 </div>	
			 </Provider>
		</Router>, document.getElementById('root'));
registerServiceWorker();
