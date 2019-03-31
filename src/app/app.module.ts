import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeadercomponentComponent} from './shared/headercomponent/headercomponent.component';
import {FootercomponentComponent} from './shared/footercomponent/footercomponent.component';
import {HomeModule} from "./home/home.module";

@NgModule({
    declarations: [
        AppComponent,
        HeadercomponentComponent,
        FootercomponentComponent,
    ],
    imports: [
        BrowserModule,
        HomeModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
