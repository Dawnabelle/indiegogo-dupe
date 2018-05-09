import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})

export class NavbarMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let button = document.querySelector('.menu-left .menu-button');
    button.addEventListener('click', function(){
      document.querySelector('.menu').classList.toggle('menu-open');
    });

  };


}
