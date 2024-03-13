import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'Correo electronico invalido.' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('password') ? 'Contraseña invalida' : '';
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Enviar datos de inicio de sesión al servicio de autenticación
      this.authService.login(this.loginForm.value.email, 
        this.loginForm.value.password).subscribe({
        next: (data) => {
          // Redirigir al usuario a la página principal o al panel de control
        },
        error: (error) => {
          // Mostrar mensaje de error al usuario
        }}
      );
    }
  }
}
