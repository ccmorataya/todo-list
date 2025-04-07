import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'todolist-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  private router: Router = inject(Router);

  constructor(private http: HttpClient) {}

  onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/all']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
  }
}
