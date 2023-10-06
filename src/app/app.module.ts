import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { WeatherApiService } from "../services/WeatherApiService";

import { WeatherDetailComponent } from "./weather-detail/weather-detail.component";
import { WeatherListsComponent } from "./weather-lists/weather-lists.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AuthorizationGuard } from "src/services/authorization.guard";

@NgModule({
  declarations: [AppComponent, WeatherDetailComponent, WeatherListsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [WeatherApiService,AuthorizationGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
