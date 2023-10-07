import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChartComponent } from './shared/chart/chart.component';
import {PieChartComponent} from "./shared/chart/pie-chart/pie-chart.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {LineChartComponent} from "./shared/chart/line-chart/line-chart.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, HeaderComponent, ChartComponent, PieChartComponent, DetailComponent, LineChartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
