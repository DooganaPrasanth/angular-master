import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-master';
  defaultValue = 225;  
}
