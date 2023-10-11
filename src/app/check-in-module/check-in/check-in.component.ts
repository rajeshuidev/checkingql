import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkInDetails } from '../interface/icheck-in';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { GetCheckInDetails } from '../gql/check-in-query.ts';
import { CheckInDataService } from '../service/check-in-data.service';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})

export class CheckInComponent {
  checkInForm!: FormGroup;
  submitted = false;
  userDetails!: checkInDetails;
  error:any;
  datanew = {};
  constructor(private formBuilder: FormBuilder, private router: Router, private apollo: Apollo, private checkInDataService: CheckInDataService) {
    this.checkInDataService.currentbookingData.subscribe();
  }

  $allCheckInDetails: Observable<checkInDetails[]> = of([]);
  ngOnInit(){

    this.checkInForm = this.formBuilder.group({
      bookingCode: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(/^[2-9a-zA-Z]+$/)
        ]
      ],
      familyName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[0-9a-zA-Z]+$/)
        ]
      ]
    });
  }
  
  onSubmit(): void {
    this.router.navigateByUrl('booking');
    this.apollo.watchQuery({
      query: GetCheckInDetails
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.$allCheckInDetails = data.allCheckInDetails;
      this.error = error;
      this.checkInDataService.changeData(this.$allCheckInDetails);
      this.setData();
    }
    );
  }

  setData() {
    this.checkInDataService.sharedData = this.$allCheckInDetails;
  }
}
