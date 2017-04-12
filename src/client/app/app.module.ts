import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { Ng2StateDeclaration, UIRouterModule, UIView } from 'ui-router-ng2';

export let MAIN_STATES: Ng2StateDeclaration[] = [{
    name: 'app',
    url: '',
    component: AppComponent,
    abstract: true
}];

@NgModule({
    imports: [BrowserModule, HttpModule,
        UIRouterModule.forRoot({
            states: MAIN_STATES
        }),
        AboutModule,
        HomeModule
    ],
    declarations: [AppComponent],
    bootstrap: [UIView]

})
export class AppModule {
}
