import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';
import { Day, DayRes, GradeRes, Week } from 'src/app/interface/Question.interface';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.scss']
})
export class AddGradeComponent {
  weeks: Week[] = []
  Days: Day[] = []
  FilterDays: Day[] = []
  Grades!: FormGroup
  profileImage: any = '../../../assets/icon/profile.jpeg'
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private matref: MatDialogRef<AddGradeComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.Grades = new FormGroup({
      week_id: new FormControl('', Validators.required),
      day_id: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),

    });
  }

  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.Grades.patchValue(this.edit_data)
    }
    this.get_week()
  }

  get_week() {
    this._crud.getGrade().subscribe(
      (res: GradeRes) => {
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

  submitForm() {
    console.log(this.Grades.value);
    this._crud.GradeInsert(this.Grades.value).subscribe(
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
    console.log(this.Grades.value);
    this._crud.GradeUpdate(this.Grades.value).subscribe(
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
