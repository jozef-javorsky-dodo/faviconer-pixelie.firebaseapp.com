import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";



describe(
  <string>"AppComponent",
  () => {
    beforeEach(async () => {
      await
        TestBed.configureTestingModule({
          imports: [
            AppComponent
          ],
        }).compileComponents();
    });

    it(
      <string>"should create the app",
      () => {

        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app)
          .toBeTruthy();
      });

  });
