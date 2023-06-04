import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landing/header/header.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { MainComponent } from './components/landing/main/main.component';
import { AboutComponent } from './components/landing/about/about.component';
import { FeatureComponent } from './components/landing/feature/feature.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutlistComponent } from './components/layouts/aboutlist/aboutlist.component';
import { CtaComponent } from './components/landing/cta/cta.component';
import { ForgetpasswordComponent } from './components/error/forgetpassword/forgetpassword.component';

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
    AboutlistComponent,
    CtaComponent,
    ForgetpasswordComponent,
  ],
  imports: [BrowserModule, MdbCheckboxModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
