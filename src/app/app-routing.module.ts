import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LogComponent } from './log/log.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './position/position.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'employees',    component: EmployeesComponent},
  { path: 'employee/:id', component: EmployeeComponent},
  { path: 'positions',    component: PositionsComponent},
  { path: 'position/:id', component: PositionComponent},
  { path: '/',            component: EmployeesComponent},
  { path: '*',            component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
