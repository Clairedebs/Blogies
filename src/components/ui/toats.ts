import { Component, OnInit } from '@angular/core'; 
import { Toast, ToastService } from '../../utils/services/toast.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-toast',
  template: `
    <div *ngIf="toast" class="toast toast-top toast-center z-50">
        <div class="alert"
        [ngClass]="{
               'alert-success': toast.type === 'success',
               'alert-error': toast.type === 'error', 
               'alert-info': toast.type === 'info'
             }"
        >
            <span 
            [ngClass]="{
                    'text-success-content': toast.type === 'success',
                    'text-error-content': toast.type === 'error', 
                    'text-info-content': toast.type === 'info'
                  }"
            >{{ toast.message }}</span>
            <button class="btn btn-sm btn-circle btn-ghost" (click)="toast = null">✕</button>
        </div>
    </div>
  `
})

export class ToastComponent implements OnInit {

  toast: Toast | null = null;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toast$.subscribe(toast => {
      this.toast = toast;
    });
  }
}