import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { SearchImgComponent } from './components/search-img/search-img.component';
import { ListarImgComponent } from './components/listar-img/listar-img.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchImgComponent,
    ListarImgComponent,
    NavbarComponent,
    ErrorComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
