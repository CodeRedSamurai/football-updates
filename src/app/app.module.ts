import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryNavComponent } from './components/country-nav/country-nav.component';
import { StandingsComponent } from './components/standings/standings.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { ApiInterceptorService } from './interceptors/api-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryNavComponent,
    StandingsComponent,
    FixturesComponent,
    ErrorComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
