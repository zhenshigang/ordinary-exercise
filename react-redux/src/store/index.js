import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'; //导入thunk

const store = createStore(
    reducer,
    applyMiddleware(thunk)//激活thunk中间件
  );
export default store