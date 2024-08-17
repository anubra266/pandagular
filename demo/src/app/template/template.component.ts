import { Component } from '@angular/core';
import { css } from '../../../styled-system/css';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  css = css;
}
