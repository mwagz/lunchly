import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  describe('findPlace', () => {
    it('should find a place', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;

      component.selectedPlace = null;

      component.findPlace();

      expect(component.selectedPlace).not.toBeNull();
    }));

    it('should not select thai if noThai is true', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;

      component.noThai = true;
      component.places = ['Burger', 'Thai'];
      component.findPlace();

      expect(component.selectedPlace).toBe('Burger');
      expect(component.hasSelected).toBeTruthy();
    }));
  });

  describe('toggleOptions', () => {
    it('should toggle the options value', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;

      component.showOptions = false;
      component.toggleOptions();

      expect(component.showOptions).toBe(true);
    }))
  });
});
