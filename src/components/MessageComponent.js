import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MessageFromComponent from './MessageFromComponent';
import MessageListComponent from './MessageListComponent';
export default class MessageComponent extends Component {

    constructor() {
        super();
        this.state = {
            messages: [{username: '闵华勇', context: '今天天气很好', date: new Date().toLocaleString()}]
        }
    };

    /**
     * 添加消息
     * @param message
     */
    addMessage=(message)=>{
        let newMessage = [...this.state.messages,message];
        this.setState({
            messages:newMessage
        });
    };

    handlerDelete=(index)=>{
        this.state.messages.splice(index,1);
        this.setState({
            messages:[...this.state.messages]
        })
    };
    render(){
        return (
           <div className="container">
               <div className="row">
                   <div className="col-sm-8 col-sm-offset-2">
                       <div className="panel panel-default">
                           <div className="panel-heading">
                               <h2 className="text-center">欢迎来到测试留言板</h2>
                           </div>
                           <div className="panel-body">
                                    <MessageListComponent handlerDelete={this.handlerDelete} messages={this.state.messages}/>
                           </div>
                           <div className="panel-footer"><MessageFromComponent addMessage={this.addMessage}/></div>
                       </div>
                   </div>
               </div>
           </div>
        );
    }   
};
