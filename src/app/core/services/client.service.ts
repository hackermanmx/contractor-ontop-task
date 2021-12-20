import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IClient } from '../../models/client/client.interface';
import { ClientMock } from '../../models/client/client.mock';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  get clients(): Observable<IClient> {
    return of(ClientMock);
  }
}
