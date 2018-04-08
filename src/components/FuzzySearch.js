import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import jsonp from 'jsonp';
export default class FuzzySearch extends Component {

    constructor(){
        super();
        this.state = {
            index:-1,
            value:'',
            words:[]
        }
    };
    /**
     *
     * @param event
     * 鼠标下移
     */
    handlerKeyDown=(event)=>{
        let index = this.state.index;
            if(40 ===event.keyCode || 38 === event.keyCode){
                if(38 === event.keyCode){
                    index --;
                }else{
                    index ++;
                }
                this.setState({
                    index:index
                })
            }else if(13 === event.keyCode){
                let words = this.state.words;
                const word = words[index];
                this.setState({
                    value:word
                });
            }
            if(index > this.state.words.length){
                this.setState({
                    index:0
                })
            }else if(index <= -1){
                this.setState({
                    index:this.state.words.length
                })
            }
    };
    handlerChange=(event)=>{
        const value = event.target.value;
        const url = `https://www.baidu.com/su?wd=${value}`;
        const opts = {
            param:'cb'
        };
        jsonp(url,opts,(err,data)=>{
           this.setState({
              words:data.s,
               value:value

           });
        });

    };
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="input" className="form-control" onChange={this.handlerChange} onKeyDown={this.handlerKeyDown} value={this.state.value}/>
                            </div>
                            <div className="panel-body">
                                  <ul className="list-group">
                                      {

                                          this.state.words.map((item,index)=>{
                                              const  idx = index === this.state.index?'active':'';
                                              return <li key={index}  className={"list-group-item " + idx}  >{item}</li>
                                          })
                                      }
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
