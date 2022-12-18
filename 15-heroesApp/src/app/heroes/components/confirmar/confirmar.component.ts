import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {


  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe // Recibimos data (es public)
    ) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true); // envia como argumento un true, osea que si se quiere borrar
  }

  cerrar(){
    this.dialogRef.close(); // envia como argumento un undefined, ya que solo se cerro la ventana
  }

}
