import * as React from "react";

export interface HelloProps { }

export const Home = (props: HelloProps) => (
    <div>
        <h1>Hello home!</h1>
        <a href="#/hello">Hello</a><br />
        <a href="#/detail">detail</a><br />
        <a href="#/search">search</a><br />
    </div>
);