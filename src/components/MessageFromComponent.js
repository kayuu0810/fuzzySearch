import React, { Component } from 'react';
import '../css/app.css'
export default class MessageFromComponent extends Component {

    /**
     * 用户点击的时候获取内容及信息
     */

    handlerClick=(event)=>{

        event.preventDefault();
      const username = this.username.value;
      const context = this.context.value;
      const message =  {username:username,  context:context, date: new Date().toLocaleString()};
      this.props.addMessage(message)

    };
    render(){
        return (
           <div>
               <div className="from-group">
                   <input type="text" name="username" ref={username => this.username = username}/>
               </div>
               <textarea className='form-control' maxLength='1024' ref={context => this.context = context }/>
               <button className='btn-public-message btn btn-primary text-center' onClick={this.handlerClick}>发布</button>
           </div>
        );
    }
}
