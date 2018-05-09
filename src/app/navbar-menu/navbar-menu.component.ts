import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor() {
    // this.initHandleMobileMenu();
  }
    // initHandleMobileMenu(){
    //   $('.navbar-menu .menu-button').click(function(e) {
    //     e.preventDefault();
    //     console.log("angle clicked");
    //     let mobileMenu =  $('.navbar-menu');
    //     mobileMenu.toggleClass('.menu-open');
    //   });
    // }

  ngOnInit() {
    $(document).ready(function(){
      $('.menu-left i').click(function(event){
        event.preventDefault();
        let mobileMenu =  $('.menu');
        mobileMenu.toggleClass('menu-open');
      });
    });
  }

}
