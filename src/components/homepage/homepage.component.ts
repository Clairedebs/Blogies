import { Component, NgModule } from '@angular/core';
import { Post } from '../../models/models';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, StarIcon} from 'lucide-angular';
import { BlogService } from '../../utils/services/blog.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    NavbarComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
   posts!: Post[];
   published: Post[] = [];
   readonly StarIcon = StarIcon;

   constructor(
    private blogService: BlogService
   ){
    this.posts = this.blogService.getBlog();
    this.published = this.posts.filter(post => post.status === 'published');
   }
}
