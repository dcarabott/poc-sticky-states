import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { Category, trace, UIRouterModule, UIView } from '@uirouter/angular';
import { uiRouterConfigFn } from './router.config';

export let MAIN_STATES = [{
    name: 'app',
    url: '',
    component: AppComponent,
    abstract: true
}];

trace.enable(Category.TRANSITION, Category.VIEWCONFIG, Category.HOOK, Category.UIVIEW, Category.RESOLVE);

@NgModule({
    imports: [BrowserModule, HttpModule,
        UIRouterModule.forRoot({
            states: MAIN_STATES,
            config: uiRouterConfigFn
        }),
        AboutModule,
        HomeModule
    ],
    declarations: [AppComponent],
    bootstrap: [UIView]
})
export class AppModule {
}
