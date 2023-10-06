import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WeatherApiService } from "src/services/WeatherApiService";

@Component({
  selector: "app-weather-lists",
  templateUrl: "./weather-lists.component.html",
  styleUrls: ["./weather-lists.component.css"],
})
export class WeatherListsComponent implements OnInit {
  title = "app";
  weathers: any;

  constructor(private weatherService: WeatherApiService, activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {}

  getWeather() {
    this.weatherService
      .getWeather()
      .subscribe((x) => (this.weathers = x.products));
  }
}
