import React, { Component } from 'react';
import Message from './Message'
export default class MessageListComponent extends Component {


    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>{
                        return <Message key={index} message={message} index={index} handlerDelete={this.props.handlerDelete}/>
                    })
                }
            </ul>
            )
    }
}
