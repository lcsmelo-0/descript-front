import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Reviser } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ReviserService {

  constructor(private http: HttpClient) { }

  getReviser() {
    return this.http.get<Reviser>(`${environment.apiUrl}/revisers`)
  }
}
