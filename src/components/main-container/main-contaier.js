import React, {useEffect} from 'react';

import PageAggregator from './page-types/Page-aggregator'
import {Switch, Route} from 'react-router-dom'
import SinglePage from './page-types/SinglePage';
import PageLeveller from './page-types/PageLeveller';
import Home from './page-types/Home';
import { useHistory } from 'react-router-dom'

const ChangePageEffect = () => {

    return (<div>
        <Route exact path='/' component={Home} />
        <Route exact path='/mainpage:id' component={PageAggregator}/>
        <Route exact path='/singlePage:id' component={SinglePage}/>
        <Route exact path='/subTagAggregator:tag' component={PageLeveller} subTagRef={true}/>
    </div>)
}

const MainContainer = (props) => {

    return <Switch>
        <Route path='/' component={ChangePageEffect} props={props}/>
            </Switch>;
}
export default MainContainer