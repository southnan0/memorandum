/// <reference path="../interfaces.d.ts"/>
import * as React from "react";
import {Router} from 'director/build/director';
import {HTMLProps} from '@types/react';
import { Hello } from "../components/Hello";
import { Detail } from "../components/Detail";
import { Home } from '../components/Home';

export interface RouterProps extends HTMLProps<HTMLDivElement> {path?:string};

export class RouterComponent extends React.Component<RouterProps,IAppState> {
    public state : IAppState;

    constructor(props:RouterProps){
        super(props);
        this.state = {
            nowShowing: <Home />,
            editing: null
        };
    }

    public componentDidMount() {
        var setState = this.setState;
        var router = Router({
            '/': setState.bind(this, {nowShowing: <Home />}),
            '/hello': setState.bind(this, {nowShowing: <Hello framework='1' compiler='2'  />}),
            '/detail': setState.bind(this, {nowShowing: <Detail />})
        }).init('#/');
        console.info(router);
  }
//todo
    render(){
        const {path,...otherProps} = this.props;
        return (
        <div {...otherProps}>
            {this.state.nowShowing}
        </div>
        );
    }
}