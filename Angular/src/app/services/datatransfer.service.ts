import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  dataSource;
  currentData;
  private dataSourse=new BehaviorSubject<any>("");

  constructor() { }

  setData(dataReceived){
    this.dataSource=new BehaviorSubject<any>(dataReceived);
    this.currentData=this.dataSource.asObservable();
  }
  getData(){
    return this.currentData;
  }
}
