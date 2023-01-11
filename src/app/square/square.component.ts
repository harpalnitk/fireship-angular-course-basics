import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button>{{value}}</button>
  `,
  styles: [`button{
    width:198px;
    height:198px;
    font-size:5rem;
  }`
  ]
})
export class SquareComponent {
@Input() value: 'X' | 'O';
}
