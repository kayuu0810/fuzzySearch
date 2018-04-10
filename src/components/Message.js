import React, { Component } from 'react';
export default class Message extends Component {

    render(){
        let {message , index} = this.props;
        return (
            <li className='list-group-item' key={index}>
                用户名:{message.username} : 内容: {message.context}
                <button className='btn badge-danger btn-sm' onClick={()=>{this.props.handlerDelete(index)}} >删除</button>
                <span className='pull-right'>{message.date}</span>
            </li>
        );
    }
}
