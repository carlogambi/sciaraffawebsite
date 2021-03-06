import React from 'react';

import PageAggregator from './page-types/Page-aggregator'
import {Switch, Route} from 'react-router-dom'
import SinglePage from './page-types/SinglePage';
import PageLeveller from './page-types/PageLeveller';
import Home from './page-types/Home';

const ChangePageEffect = () => {
    const effectStyle={
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
        boder: 'solid 1px red'
    }
    
    return (<div style={effectStyle}>
        <Route exact path='/' component={Home} />
        <Route exact path='/mainpage:id' component={PageAggregator}/>
        <Route exact path='/singlePage:id' component={SinglePage}/>
        <Route exact path='/subTagAggregator:tag/:prev' component={PageLeveller}/>
    </div>)
}

const MainContainer = (props) => {

    return <Switch>
        <Route path='/' component={ChangePageEffect} props={props}/>
            </Switch>;
}
export default MainContainer