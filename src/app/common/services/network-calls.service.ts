import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NetworkCallsService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTrendingTickers() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-rapidapi-key',
      '628cf69045msh1fff05347783c87p1e7776jsn2f15fcc5d10d'
    );
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

  postData(task: any) {
    return this.http.post(`${this.url}/rerun`, task);
  }
}
