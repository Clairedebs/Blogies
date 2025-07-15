import { Component, NgModule } from '@angular/core';
import { Post } from '../../models/models';
import { concat } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Heart} from 'lucide-angular';
import { BlogService } from '../../utils/services/blog.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
   posts!: Post[];
   published: Post[] = [];

   constructor(
    private blogService: BlogService
   ){
    this.posts = this.blogService.getBlog();
    this.published = this.posts.filter(post => post.status === 'published');
   }
}
