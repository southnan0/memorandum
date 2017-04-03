/// <reference path="../../interfaces.d.ts"/>;

import * as React from "react";
declare const history;

export interface HelloProps { compiler: string; framework: string; }
//todo
export class Search extends React.Component<IAppProps,IAppState>{ 
    public state : IAppState;
    constructor(props:IAppProps){
        super(props);
        this.state = {
            showHistoryLenth:false
        };
    }

    onShowHistoryLength():void{
        this.setState({
            showHistoryLenth:true
        })
    }

    render(){
        const {showHistoryLenth} = this.state;
        return (
            <div>
                <a href="javascript:history.back()">返回</a>
                <a href="#/" style={{float:"right"}}>工作台</a>
                <h1>This is detail page!</h1>
                <button onClick={this.onShowHistoryLength.bind(this)}>show history length</button>
                {showHistoryLenth && <p>{history.length}</p>}
            </div>
        )
    }
}