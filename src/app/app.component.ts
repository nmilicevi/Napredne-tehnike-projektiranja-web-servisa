import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { OktaAuthService } from '@okta/okta-angular';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'technology';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn){
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");

      this.username = user.username;
    }
  }

  logout(): void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  slides = [
    {'image': 'https://www.epo.org/about-us/annual-reports-statistics/statistics/2020/digital-technologies/TopVisual.jpg?lenya.module=svg&height=283&width=761'}, 
    {'image': 'https://i.insider.com/5fd299359cf1420018d2ea79?width=1136&format=jpeg'},
    {'image': 'https://cdn.shopify.com/s/files/1/0026/7132/articles/cool-technology-2016-in-tech_2048x2048.jpg?v=1453993699'}, 
    {'image': 'https://i.pinimg.com/736x/9f/1d/0a/9f1d0a455d114b2698404ae199a45cab--yanko-design-the-future.jpg'}, 
    {'image': 'https://thegadgetflow.com/wp-content/uploads/2019/10/24-Cool-tech-gadgets-that-prove-we-are-living-in-the-future-1200x675.jpg'}
  ];
 
}
