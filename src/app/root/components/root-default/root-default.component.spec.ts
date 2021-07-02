import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootDefaultComponent } from './root-default.component';

describe('RootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RootDefaultComponent
      ],
    }).compileComponents();
  });

  it('should create the root', () => {
    const fixture = TestBed.createComponent(RootDefaultComponent);
    const root = fixture.componentInstance;
    expect(root).toBeTruthy();
  });

  it(`should have as title 'angularDapp'`, () => {
    const fixture = TestBed.createComponent(RootDefaultComponent);
    const root = fixture.componentInstance;
    expect(root.title).toEqual('angularDapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RootDefaultComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angularDapp root is running!');
  });
});
