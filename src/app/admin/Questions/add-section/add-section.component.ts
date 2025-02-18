import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';
import { Day, DayRes, Grade, GradeRes, Week, WeekRes } from 'src/app/interface/Question.interface';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent {
  weeks: Week[] = []
  Days: Day[] = []
  Grades: Grade[] = []
  FilterDays: Day[] = []
  SectionForm!: FormGroup
  profileImage: any = '../../../assets/icon/profile.jpeg'
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private matref: MatDialogRef<AddSectionComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.SectionForm = new FormGroup({
      week_id: new FormControl('', Validators.required),
      day_id: new FormControl('', Validators.required),
      grade_id: new FormControl('', Validators.required),
      sections: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.SectionForm.patchValue(this.edit_data)
    }
    this.get_week()
  }

  get_week() {
    this._crud.getWeek().subscribe(
      (res: WeekRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.weeks = res.data
        }
      }
    )
  }

  onGetDay(event: any) {
    console.log(event.target.value)
    this._crud.getDays().subscribe(
      (res: DayRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.Days = res.data
          this.FilterDays = this.Days.filter((d) => d.week_id == event.target.value)
        }

      }
    )
  }

  onGetGrades(event: any) {
    console.log(event.target.value)
    
  }

  submitForm() {
    console.log(this.SectionForm.value);
    this._crud.SectionInsert(this.SectionForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res.success == 1) {
          alert(res.message)
          this.matref.close(1)
        } else {
          alert(res.message)
        }
      }
    )
  }


  updateForm() {
    console.log(this.SectionForm.value);
    this._crud.SectionUpdate(this.SectionForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res.success == 1) {
          alert(res.message)
          this.matref.close(1)
        } else {
          alert(res.message)
        }
      }
    )
  }

}
