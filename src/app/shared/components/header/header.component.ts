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

  showResponsiveMenu: boolean = false;

  constructor(
    private readonly router: Router,
    public readonly menu: MenuHeaderService,
    public readonly auth: AuthService,
  ){}

  toggleShowResponsiveMenu(){
    this.showResponsiveMenu = !this.showResponsiveMenu;
  }

  logOut(){
    this.auth.logOut();
    this.router.navigateByUrl('/auth/login')
  }
}
