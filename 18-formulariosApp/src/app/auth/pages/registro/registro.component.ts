import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';

// Usar para validaciones sencillas, pero es mejor un servicio
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ]], // patter para expresion regular
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
    password: ['', [ Validators.required, Validators.minLength(6) ] ],
    password2: ['', [ Validators.required ] ],
  }, {
    validators: [ this.validatorService.camposIguales('password','password2') ]
  });

  get emailErrorMsg(): string {
    
    // obtenemos errores del campo, y evaluamos
    const errors = this.miFormulario.get('email')?.errors;
    if ( errors?.["required"] ) {
      return 'Email es obligatorio';
    } else if ( errors?.["pattern"] ) {
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors?.["emailTomado"] ) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  constructor( private fb: FormBuilder, 
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService,
             ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Christopher Gudiel',
      email: 'test1@test.com',
      username: 'gudiel_16',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched(); // muestra los errores al presionar el boton
  }

}
