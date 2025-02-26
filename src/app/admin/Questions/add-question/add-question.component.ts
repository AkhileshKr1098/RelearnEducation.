import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  classe: any[] = [];
  units: any[] = [];
  Topics: any[] = [];
  QuestionForm!: FormGroup;
  profileImage: any = '../../../assets/icon/profile.jpeg';
  questionType: string = '';

  constructor(
    private _fb: FormBuilder,
    private _crud: CRUDService,
    private matref: MatDialogRef<AddQuestionComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public edit_data: any
  ) {
    this.QuestionForm = this._fb.group({
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
      id: ['', Validators.required],
      LetterMatch: this._fb.array([this.createOptionRow()])

    });
  }

  ngOnInit() {
    if (this.edit_data) {
      this.GetUnit(this.edit_data.class_id_fk);
      this.getTopics(this.edit_data.unit_id_fk);
      this.QuestionForm.patchValue(this.edit_data);
      this.questionType = this.edit_data.question_type;
    }
    this.onGetClass();
  }

  onQuestionTypeChange(event: any) {
    this.questionType = event.target.value;
    this.cdr.detectChanges(); // Ensures UI updates
  }

  onGetClass() {
    this._crud.getClass().subscribe(
      (res) => {
        if (Array.isArray(res.data)) {
          this.classe = res.data;
        }
      }
    );
  }

  onGetUnit(event: any) {
    const class_id = event.target.value;
    this.GetUnit(class_id);
  }

  GetUnit(cls: string) {
    this._crud.getUnitByClass(cls).subscribe(
      (res: any) => {
        this.units = Array.isArray(res.data) ? res.data : [];
      }
    );
  }

  onGetTopics(event: any) {
    const unit = event.target.value;
    this.getTopics(unit);
  }

  getTopics(unit: any) {
    this._crud.getTopicsByunit(unit).subscribe(
      (res: any) => {
        this.Topics = Array.isArray(res.data) ? res.data : [];
      }
    );
  }

  submitForm() {
    if (this.questionType == 'MCQ') {
      this._crud.addQuestion(this.QuestionForm.value).subscribe(
        (res) => {
          alert(res.message);
          if (res.success == 1) {
            this.matref.close(1);
          }
        }
      );
    }

    if (this.questionType == 'LetterMatch') {
      console.log(this.QuestionForm.value)
      const formData = {
        OptionA: this.options.value.map((row: any) => row.OptionA),
        OptionB: this.options.value.map((row: any) => row.OptionB),
        Answer: this.options.value.map((row: any) => row.OptionC),
        Question: this.QuestionForm.get('Question')?.value,
        class_id_fk: this.QuestionForm.get('class_id_fk')?.value,
        unit_id_fk: this.QuestionForm.get('class_id_fk')?.value,
        topics_id_fk: this.QuestionForm.get('topics_id_fk')?.value,
        question_type: this.QuestionForm.get('question_type')?.value,
      };


      this._crud.addQuestion(formData).subscribe(
        (res) => {
          alert(res.message);
          if (res.success == 1) {
            this.matref.close(1);
          }
        }
      );
    }
  }

  updateForm() {
    const data = { ...this.QuestionForm.value };
    this._crud.QuestionUpdate(data).subscribe(
      (res) => {
        alert(res.message);
        if (res.success == 1) {
          this.matref.close(1);
        }
      }
    );
  }

  get options() {
    return this.QuestionForm.get('LetterMatch') as FormArray;
  }

  createOptionRow(): FormGroup {
    return this._fb.group({
      OptionA: [''],
      OptionB: [''],
      Answer: ['']
    });
  }

  addRow() {
    if (this.options.length < 5) {
      this.options.push(this.createOptionRow());
    }
  }
}
