import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { IUser } from 'src/app/Models/iuser';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
Formgroup:FormGroup
Newuser:IUser ={} as IUser
// this.Newuser
  constructor(private FormBuilder:FormBuilder,private APIService:APIService) {
// this.Formgroup=new FormGroup({
//   Fullname:new FormControl('',[Validators.required,Validators.minLength(5)]),
//   Email:new FormControl('',[Validators.required,Validators.email]),
//   Mobilenumber:new FormControl(''),
//   Address:new FormGroup({
//     City:new FormControl(''),
//     Street:new FormControl('')
//   }),
//   Password:new FormControl('')
// })

this.Formgroup=this.FormBuilder.group({
  Fullname:['',[Validators.required,Validators.minLength(5)]],
  Email:['',[Validators.required,Validators.email]],
  // Mobilenumber:FormBuilder.array([FormBuilder.control('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')])]),
  Mobilenumber:FormBuilder.array([FormBuilder.control('',[Validators.required,Validators.minLength(3)])]),
  // Mobilenumbercontrol:['',[Validators.required,Validators.minLength(6)]],
  // Mobilenumber:FormBuilder.array([this.FormBuilder.group({
  // Mobilenumbercontrol:['',[Validators.required,Validators.minLength(6)]]
  // })]),
  
  Address:this.FormBuilder.group({
    City:['',Validators.required],
    Street:['',Validators.required]
  }),
  referral:['',Validators.required],
  referralspecific:[''],
  Password:['',[Validators.required,Validators.minLength(6)]]
})
  }
  get Fullname(){
    return this.Formgroup.get('Fullname');
  }
  get Email(){
    return this.Formgroup.get('Email');
  }
  get Mobilenumber(){
    return this.Formgroup.get('Mobilenumber') as FormArray;
  }

  get referral(){
return this.Formgroup.get('referral')
  }

  referralvalidation(){
    if (this.referral?.value=="specificdays") {
      this.Formgroup.get('referralspecific')?.addValidators([Validators.required])
    }
    else{
      this.Formgroup.get('referralspecific')?.clearValidators()
    }
    this.Formgroup.get('referralspecific')?.updateValueAndValidity()
  }

  addnumber(){
    // this.Mobilenumber.push(this.FormBuilder.control('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]))
    this.Mobilenumber.push(this.FormBuilder.control(''))
  }

  removenumber(){
    this.Mobilenumber.removeAt(this.Mobilenumber.length-1)
  }

  get City(){
    return this.Formgroup.get('Address')?.get('City');
  }
  get Street(){
    return this.Formgroup.get('Address')?.get('Street');
  }
  get Password(){
    return this.Formgroup.get('Password');
  }

  insertuser(){
    this.APIService.adduser(this.Newuser).subscribe({
      next:(x)=>{
        // this.Router.navigate(['/orders'])
      },
      error:(y)=>{
        alert("error while adding")
      }
      
    })
  }
  ngOnInit(): void {
  }

}
