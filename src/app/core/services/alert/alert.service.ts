import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
import { environment } from 'src/environments/environment';
import { AlertMessage } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  close() {
    Swal.close();
  }

  display(options: AlertMessage): void{
    Swal.fire({
      ...options,
      confirmButtonColor: environment.primaryColor
    } as AlertMessage)
  }

  loading(title: string = 'Espere un momento'): void {
    Swal.fire({
      title,
      allowOutsideClick: false,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

}
