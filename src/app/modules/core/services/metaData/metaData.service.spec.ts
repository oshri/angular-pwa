import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { MetaDataService } from './metaData.service';

describe('MetaData Service', () => {
	let service: MetaDataService;
	let title: Title;
	let meta: Meta;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [MetaDataService]
		});
	});

	beforeEach(() => {
		service = TestBed.get(MetaDataService);
		title = TestBed.get(Title);
		meta = TestBed.get(Meta);

		jest.spyOn(title, 'setTitle');
		jest.spyOn(meta, 'updateTag');
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('Update Page Title', () => {
		it('should call set Title', () => {
			service.setMetaData({
				title: `Angular PWA`
			});

			expect(title.setTitle).toHaveBeenCalledWith('Angular PWA');
		});
	});
});
