import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { IMetaDataConfig } from '../../models';
@Injectable({
	providedIn: 'root'
})
export class MetaDataService {
	private appColor = '#3E00FF';
	private appImage = '/assets/badhe.svg';
	private appTitle = 'Angular PWA';
	private appDescription = 'Angular PWA (Progresive Web App) deploy on Github pages. power by CircleCi build and deploy';

	constructor(private meta: Meta, private title: Title) {}

	public setMetaData(config: IMetaDataConfig): void {
		const description = config.description || this.appDescription;
		const image = config.image || this.appImage;
		const title = config.title ? `${config.title}` : this.appTitle;

		this.title.setTitle(title);

		const tags = [
			{ name: 'description', content: description },
			{ name: 'theme-color', content: this.appColor },
			{ name: 'twitter:card', content: 'summary' },
			{ name: 'twitter:image', content: image },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
			{ name: 'apple-mobile-web-app-title', content: title },
			{ name: 'apple-touch-startup-image', content: image },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:image', content: image }
		];

		tags.forEach(tag => this.meta.updateTag(tag));
	}
}
