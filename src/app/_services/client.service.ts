import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Client } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ClientService {

  constructor(private http: HttpClient) { }

  getClient() {

    return this.http.get<Client>(`${environment.apiUrl}/clients`)

  }


}
