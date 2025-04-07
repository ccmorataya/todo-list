import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todolist-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public status: boolean = true;
  public password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      status: this.status,
      password: this.password
    };

    const token = localStorage.getItem('authToken'); // Obtén el token del localStorage

    if (!token) {
      console.error('No token found');
      return;
    }

    this.http.post('http://localhost:8080/api/users', newUser, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        console.log('Usuario creado exitosamente');
        this.goBack(); 
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/user-list']); // Redirige al listado de usuarios
  }
}
