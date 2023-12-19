import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
interface CountryConfig {
  country: string;
  leagueId: string;
}
@Component({
  selector: 'app-country-nav',
  templateUrl: './country-nav.component.html',
  styleUrls: ['./country-nav.component.scss'],
})
export class CountryNavComponent implements OnInit {
  @Input() countries: CountryConfig[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
