import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TsComponent } from "./ts/ts.component";
import { TemplateComponent } from "./template/template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TsComponent, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
