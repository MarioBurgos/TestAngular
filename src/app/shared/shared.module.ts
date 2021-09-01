import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * NOOB hint:  Instead of declaring every component or pipe that is underneath the shared module,
 * it is highly recommended, in order to make the code one step closer to modularity, to create
 * indexes of the Components, Pipes, Services, etc. and then import them together.
 */
import * as fromComponents from './components';
import * as fromPipes from './pipes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ...fromComponents.components,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
