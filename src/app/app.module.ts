import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasePageTopComponent } from './layout/base-page-top/base-page-top.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { CardComponent } from './layout/card/card.component';
import { CardTitleComponent } from './layout/card/card-title.component';
import { CardMenuComponent } from './layout/card/card-menu.component';
import { CardBodyComponent } from './layout/card/card-body.component';
import { CardActionsComponent } from './layout/card/card-actions.component';
import { HomeComponent } from './core/home/home.component';
import {  PieChartComponent } from './core/charts/pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherComponent } from './core/weather/weather.component';
import { DataTableComponent } from './core/data-table/data-table.component';
import { TrendingActivitiesComponent } from './core/trending-activities/trending-activities.component';
import { CubeCardComponent } from './core/cube-card/cube-card.component';
import { MountEverestCardComponent } from './core/mount-everest-card/mount-everest-card.component';
import { LineChartComponent } from './core/charts/line-chart/line-chart.component';
import { TodoListComponent } from './core/todo-list/todo-list.component';
import { SupportDialogComponent } from './core/dialogs/support-dialog/support-dialog.component';
import { TableCardComponent } from './core/table-card/table-card.component';
import { ProgressComponent } from './core/progress/progress.component';
import { NotificationMenuComponent } from './core/notification-menu/notification-menu.component';
import { MessageMenuComponent } from './core/message-menu/message-menu.component';
import { LoginComponent } from './core/login/login.component';
import { ForgotPasswordComponent } from './core/login/forgot-password/forgot-password.component';
import { SignUpComponent } from './core/login/sign-up/sign-up.component';
import { BlankLayoutCardComponent } from './core/login/blank-layout-card.component';

const SHARED_MODULES = [
  CommonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatCheckboxModule,
  MatChipsModule,
  MatOptionModule,
  MatGridListModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatRadioModule,
  MatTabsModule,
  MatListModule,
  MatExpansionModule,
  MatRippleModule,
  MatTreeModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [
    AppComponent,
    BasePageTopComponent,
    SideBarComponent,
    CardComponent,
    CardTitleComponent,
    CardMenuComponent,
    CardBodyComponent,
    CardActionsComponent,
    HomeComponent,
    PieChartComponent,
    WeatherComponent,
    DataTableComponent,
    TrendingActivitiesComponent,
    CubeCardComponent,
    MountEverestCardComponent,
    LineChartComponent,
    TodoListComponent,
    SupportDialogComponent,
    TableCardComponent,
    ProgressComponent,
    NotificationMenuComponent,
    MessageMenuComponent,
    LoginComponent,
    ForgotPasswordComponent,
    BlankLayoutCardComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    ...SHARED_MODULES
  ],
  entryComponents: [ SupportDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
