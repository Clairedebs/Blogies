import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  username: string = "";
  password: string = "";

  constructor(
    private router : Router,
    private authService : AuthService
  ){}

  submit(){
    if(this.authService.login(this.username,this.password)){
      console.log('success')
      // this.router.navigate(['/']);
    } else {
      alert('Login failed');
    }
  }
}
