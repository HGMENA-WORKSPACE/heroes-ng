import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { LoadingModule } from './components/loading/loading.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutes } from './app.router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NavbarModule,
    LoadingModule,
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true, // #
      onSameUrlNavigation: 'reload', // refresca la recarga
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
