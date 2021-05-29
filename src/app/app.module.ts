import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TourMatMenuModule } from 'ngx-ui-tour-md-menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContentModifierDirective } from './directives/content-modifier.directive';
import { NavMenuItemComponent } from './components/nav-menu-item/nav-menu-item.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [AppComponent, ContentModifierDirective, NavMenuItemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TourMatMenuModule.forRoot(),
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
