import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  
  getGameList(
    odering: string,
    search?: string
  ): Observable<APIResponse<Game>>{
    let params = new HttpParams().set('odering', odering);

    if (search) {
      params = new HttpParams().set('ordering', odering).set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params: params,
    });
  }

  getGameDetails(id: string): Observable<Game> {
      const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
      const gameTrailersRequest = this.http.get(
        `${env.BASE_URL}/games/${id}/movies`
      );
      const gameScreenshortsRequest = this.http.get(
        `${env.BASE_URL}/games/${id}/screenshots` 
      );

      return forkJoin({
        gameInfoRequest,
        gameScreenshortsRequest,
        gameTrailersRequest,
      }).pipe(
        map((resp: any) => {
          return {
            ...resp['gameInfoRequest'],
            screenshots: resp['gameScreenshortsRequest']?.results,
            trailers: resp['gameTrailersRequest']?.results,
          };
        })
      );
    }
}
