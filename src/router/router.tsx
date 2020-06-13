import{Route,BrowserRouter,HashRouter } from 'react-router-dom'
import AsyncComponent from '../util/AsyncComponent';
import React from "react";
const Home=AsyncComponent(()=>import("../container/home/index"));

const routerList=[
    {
        path:'/home',
        component:Home
    }
]
const Routers=()=>(
    <HashRouter>
        <div className="router">
            {routerList.map((item,index)=>(
                item.path==='/'?<Route exact path={item.path} key={index} component={item.component}/>:<Route path={item.path} key={index} component={item.component}/>
            ))}
        </div>
    </HashRouter>
)

export default Routers;