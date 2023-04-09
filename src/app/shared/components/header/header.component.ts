import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderService } from 'src/app/core/services';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    public readonly menu: MenuHeaderService,
    public readonly auth: AuthService,
  ){}

  logOut(){
    this.auth.logOut();
    this.router.navigateByUrl('/')
  }
}
