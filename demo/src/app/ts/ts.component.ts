import { Component } from '@angular/core';
import { css } from '../../../styled-system/css';

@Component({
  selector: 'app-ts',
  standalone: true,
  imports: [],
  templateUrl: './ts.component.html',
  styleUrl: './ts.component.css',
})
export class TsComponent {
  hello = css({
    textStyle: '7xl',
    fontWeight: 'bold',
    color: 'blue.500',
  });
}
