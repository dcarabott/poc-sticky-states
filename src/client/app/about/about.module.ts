import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { UIRouterModule } from '@uirouter/angular';
import { uiRouterConfigFn } from '../router.config';

export let CHILD_STATES = [
    {
        name: 'app.about',
        url: '/about',
        sticky: true,
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
        })
    ],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule {
}
