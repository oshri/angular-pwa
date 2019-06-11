import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeComponent]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
		expect(fixture).toMatchSnapshot();
	});

	it(`should have as title 'Angular PWA deploy in github pages'`, () => {
		const fixture = TestBed.createComponent(HomeComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('Angular PWA deploy in github pages');
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(HomeComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular PWA deploy in github pages');
	});
});
