import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { QRCodeModule } from 'angularx-qrcode';
import { CodeQrDirective } from './code-qr.directive';


@NgModule({
  declarations: [
    AppComponent,
    TraductorComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    DivisasComponent,
    GeneratorComponent,
    CodeQrDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
