import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Ng2StateDeclaration, UIRouterModule } from 'ui-router-ng2';


export let CHILD_STATES: Ng2StateDeclaration[] = [
    {name: 'app.home', url: '/', component: HomeComponent}
];

@NgModule({
    imports: [CommonModule,
        UIRouterModule.forChild({
            states: CHILD_STATES
        })
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}
