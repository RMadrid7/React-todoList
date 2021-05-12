
import {DELETE_TODO_ITEM,ADD_TODO_ITEM,CHANGE_INPUT_VALUE,INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
    inputValue:'',
    list: [],
};

const fn = (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue ='';
        return newState; 
    }
    if (action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if (action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }


    return state;
}

export default fn;
