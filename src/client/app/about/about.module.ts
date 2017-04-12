import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UIRouterModule } from 'sn-ui-router-ng2';
import { uiRouterConfigFn } from '../router.config';

export let CHILD_STATES = [
    {
        name: 'app.about',
        url: '/about',
        views: {
            'secondary': {
                component: AboutComponent
            }
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        UIRouterModule.forChild({
            states: CHILD_STATES,
            config: uiRouterConfigFn
        })],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule {
}
