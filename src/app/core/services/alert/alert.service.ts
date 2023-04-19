import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from "sweetalert2";
import { environment } from 'src/environments/environment';
import { DisplayAlertOptions } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  close() {
    Swal.close();
  }

  display(options: DisplayAlertOptions): Promise<SweetAlertResult<any>>{
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

  displayToast(options: DisplayAlertOptions): Promise<SweetAlertResult<any>>{
    return Swal.fire({
      ...options,
      timer: 2000,
      toast:true, 
      position: 'top-end', 
      showConfirmButton: false,
    })
  }

}
