import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todolist-edit-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public userId: string = '';
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public status: boolean = true;
  public password: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId') || '';
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No token found');
      return;
    }

    this.http.get<any>(`http://localhost:8080/api/users/${this.userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (user) => {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.status = user.status;
      },
      error: (error) => {
        console.error('Error al obtener los detalles del usuario:', error);
      }
    });
  }

  onSubmit() {
    const updatedUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      status: this.status,
      password: this.password || undefined // Solo enviar la contraseña si se proporciona
    };

    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No token found');
      return;
    }

    this.http.put(`http://localhost:8080/api/users/${this.userId}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        console.log('Usuario actualizado exitosamente');
        this.router.navigate(['/user-list']); // Redirige a la lista de usuarios
      },
      error: (error) => {
        console.error('Error al actualizar el usuario:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/user-list']); // Redirige al listado de usuarios
  }
}