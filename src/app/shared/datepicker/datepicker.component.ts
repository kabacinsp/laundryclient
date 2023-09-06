import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  standalone: true,
	imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  model!: NgbDateStruct;
  date: Date | undefined
}
