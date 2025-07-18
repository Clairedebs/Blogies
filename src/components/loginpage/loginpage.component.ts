import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, EyeIcon, EyeClosedIcon, MoveLeftIcon} from 'lucide-angular';
import { ToastService } from '../../utils/services/toast.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule

  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  readonly EyeIcon = EyeIcon;
  readonly EyeClosedIcon = EyeClosedIcon;
  readonly MoveLeftIcon = MoveLeftIcon;
  username: string = "";
  password: string = "";
  isPasswordVisible: boolean = false;

  constructor(
    private router : Router,
    private authService : AuthService,
    private toastService: ToastService
  ){}

  submit(){
    if(!this.username || !this.password) {
      this.toastService.showToast('Please enter both username and password', 5000, 'error');
      return;
    }
    if(this.authService.login(this.username,this.password)){
      console.log('success')
      this.toastService.showToast('Login successful', 5000, 'success');
      this.router.navigate(['/']);
    } else {
      this.toastService.showToast('Login failed', 5000, 'error');
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  } 
}
