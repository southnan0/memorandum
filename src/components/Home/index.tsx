import * as React from "react";

export interface HelloProps { }

export const Home = (props: HelloProps) => (
    <div>
        <h1>首页</h1>
        <a href="#/hello">列表</a><br />
        <a href="#/detail">详情</a><br />
        <a href="#/search">搜索</a><br />
    </div>
);