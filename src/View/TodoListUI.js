import React from 'react';

import {Input,Button,List} from 'antd';

const TodoListUI = (props) => {
    return(
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                        value={props.inputValue} 
                        style={{width:'300px',marginRight:'10px'}} 
                        placeholder='todoInfo'
                        onChange = {props.handleInputChange}
                    />
                    <Button 
                    type='primary'
                    onClick = {props.handleBtnClick}
                    >提交</Button>
                </div>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
                    style={{marginTop:'10px',width:'300px'}}
                />
            </div>
        )
}

export default TodoListUI;