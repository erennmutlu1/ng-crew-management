import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.css'
})
export class SelectLanguageComponent {
  selectedLanguage: any;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('selectedLanguage')) {
      this.selectedLanguage = localStorage.getItem('selectedLanguage');
    }
    else {
      this.selectedLanguage = 'en';
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
    }
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
  }
}
