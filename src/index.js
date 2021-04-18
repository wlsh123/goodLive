import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import {Provider} from 'react-redux'
import './static/css/common.less'
import store from './store';

//初始化操作
if(localStorage.getItem('city')){
  store.dispatch({type:'INIT_CITY',city:{cityName:localStorage.getItem('city')}})
}
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
