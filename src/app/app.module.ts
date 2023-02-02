import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landing/header/header.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { MainComponent } from './components/landing/main/main.component';
import { AboutComponent } from './components/landing/about/about.component';
import { FeatureComponent } from './components/landing/feature/feature.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ButtonComponent,
    MainComponent,
    AboutComponent,
    FeatureComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, MdbCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
