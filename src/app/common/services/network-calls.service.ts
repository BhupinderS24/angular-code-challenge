import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NetworkCallsService {
  url = environment.apiUrl;
  apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getTrendingTickers() {
    let headers = new HttpHeaders();
    headers = headers.append('x-rapidapi-key', this.apiKey);
    headers = headers.append(
      'x-rapidapi-host',
      'apidojo-yahoo-finance-v1.p.rapidapi.com'
    );

    let params = new HttpParams();
    params = params.append('region', 'US');

    return this.http.get(`${this.url}market/get-trending-tickers`, {
      headers,
      params,
    });
  }
}
