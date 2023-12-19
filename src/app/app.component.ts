import { Component } from '@angular/core';
import { countriesList, appTitle } from './constants/application-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = appTitle;
  countriesList = countriesList;
}
