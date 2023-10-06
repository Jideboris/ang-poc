import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProducts } from "./weather-api.service";


@Injectable({
  providedIn: "root",
})
export class WeatherApiService {
  constructor(private httpClient: HttpClient) { }

  getWeather() {
    return this.httpClient.get<IProducts>("https://dummyjson.com/products");
  }
}
