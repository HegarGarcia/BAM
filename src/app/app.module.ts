import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angularfire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

// Core Module
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

// Feature Modules
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { ProfilesModule } from "./profiles/profiles.module";
import { ProductDetailModule } from './product-detail/product-detail.module';
import { AddProductModule } from "./add-product/add-product.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    DashboardModule,
    LoginModule,
    ProfilesModule,
    ProductDetailModule,
    AddProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
