import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, DoCheck{
boats:any;
boatsObservable:Observable<any>;
ngOnInit(): void {
  //Called after the constructor, 
  //initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //first time change detection happens here
  this.boats = [
    { name: 'Starfire', year: 1977, img: 'assets/img/sorry.jpg' },
    { name: 'Oracle', year: 2015, img: 'assets/img/card-sf.png' },
  ];

  this.boatsObservable = of([
    { name: 'Starfire', year: 1977, img: 'assets/img/sorry.jpg' },
    { name: 'Oracle', year: 2015, img: 'assets/img/card-sf.png' },
  ]);
}
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //used if we have child views inside our component
  //which ensures that child views are also loaded as well
  
}

//CHANGE DETECTION
//angular uses zone.js which listens for any events or asynchronous activity in the app
// and then re-render components as needed
ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //useful for debugging
  //this method runs when change detection starts
  
}

}
