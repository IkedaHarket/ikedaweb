import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from "sweetalert2";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  close() {
    Swal.close();
  }

  display(options: SweetAlertOptions): void{
    Swal.fire({
      ...options,
      confirmButtonColor: environment.primaryColor
    })
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
