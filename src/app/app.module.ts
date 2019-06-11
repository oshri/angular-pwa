import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';

import { SwUpdatesModule } from './modules/swUpdates';
import { CoreModule } from '@app-core/index';
import { AppComponent } from '@app-core/containers/app/app.component';
import { GaService } from '@app-core/services/googleAnalytics/googleAnalytics.service';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		SwUpdatesModule,
		ServiceWorkerModule.register('/angular-pwa/ngsw-worker.js', { enabled: environment.production })
	],
	providers: [GaService],
	bootstrap: [AppComponent]
})
export class AppModule {}
