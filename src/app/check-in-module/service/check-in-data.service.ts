import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInDataService {

  constructor() { }
  sharedData:any;
  private bookingData = new BehaviorSubject({});
  currentbookingData = this.bookingData.asObservable();

  changeData(data: {}){
    this.bookingData.next(data)
    this.sharedData=data;
  }
}
