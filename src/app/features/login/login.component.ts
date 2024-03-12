import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string;
  password: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.email='';
    this.password=''; 
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Enviar datos de inicio de sesión al servicio de autenticación
      this.authService.login(this.email, this.password).subscribe(
        (data) => {
          // Redirigir al usuario a la página principal o al panel de control
        },
        (error) => {
          // Mostrar mensaje de error al usuario
        }
      );
    }
  }

}
