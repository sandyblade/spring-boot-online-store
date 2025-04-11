import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RelatedProductComponent } from './components/related-product/related-product.component';
import { SliderComponent } from './components/slider/slider.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { StarRatingModule } from 'angular-star-rating';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    BestSellerComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NewsletterComponent,
    RelatedProductComponent,
    SliderComponent,
    TimelineComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ConfirmPageComponent,
    ErrorPageComponent,
    ForgotPasswordPageComponent,
    HomePageComponent,
    LoginPageComponent,
    PasswordPageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    ResetPasswordPageComponent,
    StorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    NgxSliderModule,
    StarRatingModule.forRoot(),
    LottieComponent
  ],
  providers: [
    provideLottieOptions({
      player: playerFactory,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
