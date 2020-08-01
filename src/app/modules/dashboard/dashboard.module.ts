import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { MotdComponent } from './components/motd/motd.component';
import { NewsComponent } from './components/news/news.component';
import { NgModule } from '@angular/core';
import { ProgressionComponent } from './components/progression/progression.component';
import { StatsComponent } from './components/stats/stats.component';
import { StockIndicesComponent } from './components/stock-indices/stock-indices.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    NewsComponent,
    LeaderBoardComponent,
    MotdComponent,
    StatsComponent,
    ProgressionComponent,
    StockIndicesComponent,
    WeatherComponent,
    WidgetComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
