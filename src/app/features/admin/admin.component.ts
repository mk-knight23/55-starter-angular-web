import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>Admin Panel</h1>
      <p class="text-secondary">Admin functionality - requires admin role</p>
    </div>
  `
})
export class AdminComponent {}
