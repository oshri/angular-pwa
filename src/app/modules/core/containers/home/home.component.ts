import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '../../services/metaData/metaData.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	title = 'Angular PWA deploy in github pages';

	constructor(private metaData: MetaDataService) {}

	ngOnInit(): void {
		this.metaData.setMetaData({
			title: `Angular PWA`,
			description: `Angular PWA (Progresive Web App) deploy on Github pages. power by CircleCi build and deploy`
		});
	}
}
