/// <reference path="../../interfaces.d.ts"/>;

import * as React from "react";
declare const history;

export interface HelloProps { compiler: string; framework: string; }

export class Detail extends React.Component<IAppProps,IAppState>{ 
    public state : IAppState;
    constructor(props:IAppProps){
        super(props);
        this.state = {
            showHistoryLenth:false
        };
    }

    render(){
        const {showHistoryLenth} = this.state;
        return (
            <div>
                <a href="javascript:history.back()">返回(history.back)</a>
                <a href="#/" style={{float:"right"}}>工作台</a>
                <p>如果是history</p>
            </div>
        )
    }
}