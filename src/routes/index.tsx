import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ErrorBoundary } from '../modules';

const WorkWaveForm = lazy(() => import('../workwaveForm'));
const RequestForm = lazy(() => import('../modules').then(({ RequestForm }) => ({ default: RequestForm })));
export default () => {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Suspense fallback={<div>Loading</div>}>
                    <Route exact path="/" component={() => <ErrorBoundary><WorkWaveForm /></ErrorBoundary>} />
                    <Route exact path="/form" component={() => <ErrorBoundary><RequestForm /></ErrorBoundary>} />
                </Suspense>

            </Switch>
        </Router>
    );
}