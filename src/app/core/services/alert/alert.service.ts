import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  close() {
    Swal.close();
  }

  display(options: SweetAlertOptions): Promise<SweetAlertResult<any>>{
    return Swal.fire({
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
