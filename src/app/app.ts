// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function HttpLoaderFactory() {
//   return new TranslateHttpLoader();
// }

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, TranslateModule],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
//   providers: [
//     {
//       provide: TranslateLoader,
//       useFactory: HttpLoaderFactory,
//       deps: []
//     }
//   ]
// })
// export class App {
//   protected readonly title = signal('food-app');
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>` // ✅ REQUIRED
})
export class App {}