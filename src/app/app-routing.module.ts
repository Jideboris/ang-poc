import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WeatherListsComponent } from "./weather-lists/weather-lists.component";
import { WeatherDetailComponent } from "./weather-detail/weather-detail.component";
import { AuthorizationGuard } from "src/services/authorization.guard";

const routes: Routes = [
  {
    path: "customers",
    loadChildren: () =>
      import("./customers/customers.module").then((m) => m.CustomersModule),
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then((m) => m.OrdersModule),
  },

  {
    path: "weather-lists",
    component: WeatherListsComponent,
    canActivate: [AuthorizationGuard],
  },
  { path: "weather-lists/:title", component: WeatherDetailComponent },
  { path: "weather-detail", component: WeatherDetailComponent },
  { path: "", redirectTo: "/weather-lists", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
