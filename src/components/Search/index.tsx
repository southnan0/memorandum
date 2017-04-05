/// <reference path="../../interfaces.d.ts"/>;

import * as React from "react";
declare const history;

export interface HelloProps { compiler: string; framework: string; }

export class Search extends React.Component<IAppProps,IAppState>{ 
    public state : IAppState;
    static contextTypes = {
        router:React.PropTypes.any.isRequired
    }

    constructor(props:IAppProps){
        super(props);
        this.state = {
            backType : 0  //0 history.back  1 push
        };
    }

    backList():void{
        const {backType} = this.state;
        if (backType === 0) {
            history.back()
        } else if(backType === 1){
            //todo
            console.info( this.context.router )
            // history.pushState(null,'/home')
            location.hash = '#/';
            // this.context.router.setRoute('/detail')
        }else{
            console.info(this.context.router)
            // this.context.router.setRoute('/',1)
            location.replace(`http://${location.host}/#/`)
        }
    }

    onClickCheck(type:number):void{
        this.setState({backType:type});
    }

    render(){
        const {backType} = this.state;
        return (
            <div>
                <a href="javascript:history.back()">返回</a>
                <h1>This is detail page!</h1>
                <input type="radio" name="select" onClick={this.onClickCheck.bind(this,0)} defaultChecked={backType === 0} id="i_0"/>
                <label htmlFor="i_0">history.back </label><br />
                <input type="radio" name="select" onClick={this.onClickCheck.bind(this,1)} defaultChecked={backType === 1} id="i_1"/>
                <label htmlFor="i_1">history.push </label><br/>
                <input type="radio" name="select" onClick={this.onClickCheck.bind(this,2)} defaultChecked={backType === 2} id="i_2"/>
                <label htmlFor="i_2">history.replace </label><br/>
                <button onClick={this.backList.bind(this)}>返回列表</button>
            </div>
        )
    }
}