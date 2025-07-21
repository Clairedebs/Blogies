import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { LucideAngularModule, SunIcon, MoonIcon, UserIcon, LogOutIcon} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  onScroll() {
    const isScrolled = window.scrollY > 20;
    this.isScrolled = isScrolled;
  }
  readonly SunIcon = SunIcon;
  readonly MoonIcon = MoonIcon;
  readonly UserIcon = UserIcon;
  readonly LogOutIcon = LogOutIcon;
  isMobileMenuOpen = false;
  isDarkMode: boolean = false;
  isScrolled = false;
  isAuthenticated: boolean = false;


  constructor(
    private router : Router,
    private authService : AuthService
  ){
     this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout():void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  handleScroll = () => {
    window.addEventListener('scroll', this.onScroll);
  };
}
