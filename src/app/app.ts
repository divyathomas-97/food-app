import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {

  constructor(private langService: LanguageService) {}

ngOnInit() {
  this.langService.init(); // ✅ safe place
}

}

