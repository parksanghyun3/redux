// createStore 밑줄
// 1. redux toolkit 사용하면 createStore에 언더라인 사라짐
// 2. legacy_createaStore as createStore로 변경해서 사용하면 언더라인 삭제 가능 
import { legacy_createStore as createStore } from 'redux';
import { reducer } from './reducer';

// 스토어 생성
export const store = createStore(reducer);
