import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const routes = [
    {path: '/', exact: true, name: 'Home', component: Dashboard }
];

export default routes;