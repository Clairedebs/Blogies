import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { LucideAngularModule, SunIcon, MoonIcon, UserIcon} from 'lucide-angular';

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
  isMobileMenuOpen = false;
  isDarkMode: boolean = false;
  isScrolled = false;
  isAuthenticated: boolean = false;


  constructor(
    private router : Router,
    private authService : AuthService
  ){
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  handleScroll = () => {
    window.addEventListener('scroll', this.onScroll);
  };
}
