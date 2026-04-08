import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLang = 'en';

  constructor(private translate: TranslateService) {
  this.translate.addLangs(['en', 'ar']);
  this.translate.setDefaultLang('en');
}

init() {
  const savedLang = localStorage.getItem('lang') || 'en';
  this.setLanguage(savedLang);
}

  setLanguage(lang: string) {
    try {
      this.currentLang = lang;

      if (this.translate) {
        this.translate.use(lang);
      }

      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      localStorage.setItem('lang', lang);

    } catch (e) {
      console.error('Language switch error:', e);
    }
  }

  getLang() {
    return this.currentLang;
  }
}