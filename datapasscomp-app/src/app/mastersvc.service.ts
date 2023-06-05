import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MastersvcService {
  constructor() { }
  listarray=[{"Name":"","Mark":""}]
  getemployee()
  {
    return this.listarray;
  }
  saveemploee(obj:any)
  {
    this.listarray.push(obj);
  }
}
