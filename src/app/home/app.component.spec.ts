import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a title, text, imgsrc`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.content = {
      title: "One for One",
      text: "Send 1 monster from your hand to the Graveyard; Special Summon 1 Level 1 monster from your hand or Deck.",
      imgsrc:"http://52.57.88.137/api/card_image/One for One"
    };
    expect(app.content.title).toEqual('One for One');
    expect(app.content.text).toEqual('Send 1 monster from your hand to the Graveyard; Special Summon 1 Level 1 monster from your hand or Deck.');
    expect(app.content.imgsrc).toEqual('http://52.57.88.137/api/card_image/One for One');
  }));

  it('should render a ul li list', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul li.row.odd button').textContent).toContain('Burial from a Different Dimension');
    expect(compiled.querySelector('ul li.row.even button').textContent).toContain('Charge of the Light Brigade');
  }));

  it('should change the menu state', async() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.changeMenuState(0);
    expect(app.showList).toEqual(false);

    app.changeMenuState(1);
    expect(app.showList).toEqual(true);

  });


});
