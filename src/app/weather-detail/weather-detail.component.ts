import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-weather-detail",
  templateUrl: "./weather-detail.component.html",
  styleUrls: ["./weather-detail.component.css"],
})
export class WeatherDetailComponent implements OnInit {
  title: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      console.log("param.title>>>>>>>>>", param.get("title"));
      this.title = param.get("title");
    });
  }
}
