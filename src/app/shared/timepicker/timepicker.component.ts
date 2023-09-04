import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTimeStruct, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  standalone: true,
	imports: [NgbTimepickerModule, FormsModule, JsonPipe],
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = { hour: 13, minute: 30, second: 0 };
	minuteStep = 15;
}
