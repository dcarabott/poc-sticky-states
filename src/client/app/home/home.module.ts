import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UIRouterModule } from 'sn-2-ui-router-ng2';
import { uiRouterConfigFn } from '../router.config';

export let CHILD_STATES = [
    {
        name: 'app.home',
        url: '/',
        views: {
            'main': {
                component: HomeComponent
            }
        }
    }
];

@NgModule({
    imports: [CommonModule,
        UIRouterModule.forChild({
            states: CHILD_STATES,
            config: uiRouterConfigFn
        })
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}
