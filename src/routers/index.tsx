/// <reference path="../interfaces.d.ts"/>
import * as React from "react";
import {Router} from 'director/build/director';
import {HTMLProps} from '@types/react';
import { Hello } from "../components/Hello";
import { Detail } from "../components/Detail";
import { Home } from '../components/Home';
import { Search } from '../components/Search';

export interface RouterProps extends HTMLProps<HTMLDivElement> {path?:string};

export class RouterComponent extends React.Component<RouterProps,IAppState> {
    public state : IAppState;
    public router : IAppRouter;
    context : IAppProps;

    static childContextTypes={
        router:React.PropTypes.any
    }

    getChildContext(){
        return {
            router:this.router
        }
    }

    constructor(props:RouterProps){
        super(props);
        this.state = {
            nowShowing: <Home />,
            editing: null
        };
    }

    public componentDidMount() {
        var setState = this.setState;
        this.router = Router({
            '/': setState.bind(this, {nowShowing: <Home />}),
            '/hello': setState.bind(this, {nowShowing: <Hello framework='1' compiler='2'  />}),
            '/detail': setState.bind(this, {nowShowing: <Detail />}),
            '/search': setState.bind(this, {nowShowing: <Search />})
        });
        this.router.init('#/');
  }
    render(){
        const {path,...otherProps} = this.props;
        return (
        <div {...otherProps}>
                <p>history  长度 {history.length}</p>
            {this.state.nowShowing}
        </div>
        );
    }
}