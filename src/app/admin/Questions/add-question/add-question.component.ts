import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  classe: any[] = []
  units: any[] = []
  Topics: any[] = []
  TopicsForm!: FormGroup
  profileImage: any = '../../../assets/icon/profile.jpeg'
  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private matref: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.TopicsForm = this._fb.group({
      class_id_fk: ['', Validators.required],
      unit_id_fk: ['', Validators.required],
      topics_id_fk: ['', Validators.required],
      question_type: ['', Validators.required],
      Question: ['', Validators.required],
      OptionA: ['', Validators.required],
      OptionB: ['', Validators.required],
      OptionC: ['', Validators.required],
      OptionD: ['', Validators.required],
      Answer: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.edit_data);
    if (this.edit_data) {
      this.GetUnit(this.edit_data.class_id_fk)
      this.TopicsForm.patchValue(this.edit_data)
    }

    this.onGetClass()
  }

  onGetClass() {
    this._crud.getClass().subscribe(
      (res) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.classe = res.data
        }

      }
    )
  }

  onGetUnit(ev: any) {
    const class_id = ev.target.value
    this._crud.getUnitByClass(class_id).subscribe(
      (res: any) => {
        console.log(res);

        if (Array.isArray(res.data)) {
          this.units = res.data;
        } else {
          this.units = [];
          console.error('Error fetching units:', res.message || 'Invalid response');
        }
      },
      (error) => {
        console.error('HTTP error:', error);
        this.units = [];
      }
    );
  }

  GetUnit(cls: string) {
    this._crud.getUnitByClass(cls).subscribe(
      (res: any) => {
        console.log(res);

        if (Array.isArray(res.data)) {
          this.units = res.data;
        } else {
          this.units = [];
          console.error('Error fetching units:', res.message || 'Invalid response');
        }
      },
      (error) => {
        console.error('HTTP error:', error);
        this.units = [];
      }
    );
  }

  onGetTopics(ev: any) {
    const class_id = ev.target.value
    this._crud.getTopicsByunit(class_id).subscribe(
      (res: any) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.Topics = res.data;
        } else {
          this.Topics = [];
          console.error('Error fetching units:', res.message || 'Invalid response');
        }
      },
      (error) => {
        console.error('HTTP error:', error);
        this.units = [];
      }
    );
  }

  submitForm() {
    this._crud.addQuestion(this.TopicsForm.value).subscribe(
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
    console.log(this.TopicsForm.value);
    const data = {
      "Answer": "huv",
      "OptionA": "Tall",
      "OptionB": "Small",
      "OptionC": "Long",
      "OptionD": "Heavy",
      "Question": "What is the opposite of \"big\"?",
      "class_id_fk": 2,
      "id": 4,
      "question_type": "MCQ",
      "topics_id_fk": 3,
      "unit_id_fk": 3
    }

    this._crud.TopicsUpdate(data).subscribe(
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
