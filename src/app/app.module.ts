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
// import {  BaseChartComponent, PieChartComponent } from './core/charts/pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

const SHARED_MODULES = [
  CommonModule,
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
    // PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ...SHARED_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
