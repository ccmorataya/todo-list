import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todolist-user-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: any[] = [];
  public showDeleteModal: boolean = false; // Controla la visibilidad del modal
  public userToDelete: any = null; // Almacena el usuario que se va a eliminar

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No token found');
      return;
    }

    this.http.get<any[]>('http://localhost:8080/api/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error('Failed to fetch users:', error);
      }
    });
  }

  createUser() {
    this.router.navigate(['/new-user']);
  }

  editUser(userId: number) {
    this.router.navigate([`/edit-user/${userId}`]);
  }

  openDeleteModal(user: any) {
    this.userToDelete = user; // Almacena el usuario que se va a eliminar
    this.showDeleteModal = true; // Muestra el modal
  }

  closeDeleteModal() {
    this.userToDelete = null; // Limpia el usuario seleccionado
    this.showDeleteModal = false; // Oculta el modal
  }

  confirmDelete() {
    if (!this.userToDelete) {
      return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No token found');
      return;
    }

    this.http.delete(`http://localhost:8080/api/users/${this.userToDelete.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        console.log(`Usuario ${this.userToDelete.firstName} eliminado exitosamente.`);
        this.fetchUsers(); // Actualiza la lista de usuarios
        this.closeDeleteModal(); // Cierra el modal
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    });
  }

  logout() {
    localStorage.removeItem('authToken'); // Elimina el token de autenticación
    this.router.navigate(['/login']); // Redirige al usuario a la pantalla de login
  }
}
