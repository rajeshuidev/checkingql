import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, of } from 'rxjs';
import { checkInDetails } from '../interface/icheck-in';
import { GetCheckInDetails } from '../gql/check-in-query.ts';
import { CheckInDataService } from '../service/check-in-data.service';
import { MatExpansionModule,  } from '@angular/material/expansion';
@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports:[MatExpansionModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})

export class BookingDetailsComponent {
  panelOpenState = true;
  bookingDetails: any;
  constructor(private checkInDataService: CheckInDataService ){
    this.checkInDataService.currentbookingData.subscribe((data)=>this.bookingDetails=data);
  }
}
