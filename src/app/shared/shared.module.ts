import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostListComponent} from '../post-list/post-list.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],

    exports: [

        CommonModule,

        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
    ],

    declarations: [PostListComponent]
})
export class SharedModule {
}
