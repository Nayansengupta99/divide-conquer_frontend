import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SaveUserItemsComponent } from './save-user-items/save-user-items.component';
import { ShowSharesComponent } from './show-shares/show-shares.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterUserComponent},
  {path:"saveuseritem",component:SaveUserItemsComponent},
  {path:"shares",component:ShowSharesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
