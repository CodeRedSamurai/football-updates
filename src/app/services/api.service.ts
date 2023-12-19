import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Standings } from '../interface/standings';
import { Observable } from 'rxjs';
import { Fixtures } from '../interface/fixtures';
import { apiStandpoint, lastGames } from '../constants/application-constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getStandings(leagueId: string): Observable<Standings> {
    const queryLeague = leagueId;
    const querySeason = new Date().getFullYear();
    return this.http.get<Standings>(
      `${apiStandpoint}/standings?league=${queryLeague}&season=${querySeason}`
    );
  }
  getFixtures(
    teamId: string | null,
    leagueId: string | null
  ): Observable<Fixtures> {
    return this.http.get<Fixtures>(
      `${apiStandpoint}/fixtures?team=${teamId}&last=${lastGames}&league=${leagueId}`
    );
  }
}
