import React from 'react';
import {connect} from 'react-redux';
import {INPUTE_VALUE_CAHNGE,ADD_ITEM,DELETE_ITEM} from './store/actionTypes';


const TodoList = (props) => {
    const {inputValue,list,handleBtnClick,inputchange,deleteItem} = props;


    return (
        <div>
            <label htmlFor='input'>请输入内容</label>
            <input
                id='input'
                value={inputValue}
                onChange = {inputchange}
            />
            <button
            onClick = {handleBtnClick}    
            >提交</button>
            <ul>
                {list.map((item,index) => (<li onClick ={() =>(deleteItem(index))} key={index}>{item}</li>))}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputchange(e){
            const action = {
                type:INPUTE_VALUE_CAHNGE,
                value:e.target.value
            }
            dispatch(action);
        },
        handleBtnClick(){
            const action = {
                type:ADD_ITEM
            }
            dispatch(action);
        },
        deleteItem(index){
            const action = {
                type:DELETE_ITEM,
                index
            }
            console.log(index);
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
