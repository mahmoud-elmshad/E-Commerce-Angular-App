import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';

const Routes:Routes=[
  {path:'',redirectTo:'/users/userprofile',pathMatch:'full'},
  {path:'userprofile',component:UserProfileComponent},
  {path:'editprofile',component:EditProfileComponent}
]

@NgModule({
  declarations: [
    EditProfileComponent,
    UserProfileComponent
  ],
  imports: [
  CommonModule,
  RouterModule.forChild(Routes)
  ]
})
export class UserModule { }
