import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

import { configureTestBedWithSharedModuleCompilationResults } from '../test';

describe('AppComponent', () => {
  configureTestBedWithSharedModuleCompilationResults(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  // SLOW VERSION
  // beforeEach(done => (async () => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   });
  //
  //   await TestBed.compileComponents();
  // })().then(done).catch(done.fail));

  for (let i = 0; i < 100; i++) {
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'ng-testbed-performance'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('ng-testbed-performance');
    });

    it(`${i}: should render title in a h1 tag`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-testbed-performance!');
    });
  }
});
