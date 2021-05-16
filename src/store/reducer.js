import {INPUTE_VALUE_CAHNGE,ADD_ITEM,DELETE_ITEM} from './actionTypes';

const defaultState = {
    inputValue: '123',
    list:[]
};


const fn = (state=defaultState,action) => {
    if (action.type ===INPUTE_VALUE_CAHNGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type ===ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type ===DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
        return state;
}

export default fn;
