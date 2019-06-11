import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
const COMPONENTS = [AppComponent, HomeComponent];

@NgModule({
	declarations: COMPONENTS,
	exports: COMPONENTS,
	imports: [CommonModule, RouterModule]
})
export class CoreModule {}
