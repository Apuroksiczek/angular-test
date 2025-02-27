import { Routes } from '@angular/router';
import { Test1Component } from './ui/test1/test1.component';
import { Test2Component } from './ui/test2/test2.component';

const routeConfig: Routes = [
    {
        path: 'test1',
        component: Test1Component,
        title: 'Home page',
    },
    {
        path: 'test2',
        component: Test2Component,
        title: 'Home details',
    },
];
export default routeConfig;