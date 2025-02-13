import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';
import { AddGradeComponent } from '../add-grade/add-grade.component';
import { ConfirmBoxComponentComponent } from '../../confirm-box-component/confirm-box-component.component';
import { Grade, GradeRes } from 'src/app/interface/Question.interface';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent {
  Grade: Grade[] = []
  FilterGrade: Grade[] = []
  deletevalue: any = 1
  constructor(
    private dialog: MatDialog,
    private _crud: CRUDService

  ) { }
  ngOnInit() {
    this.getData()
  }


  getData() {
    this._crud.getGrade().subscribe(
      (res: GradeRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.Grade = res.data
          this.FilterGrade = res.data
        }
      }, (err: Error) => {
        console.log(err);

      }
    )
  }

  addNew() {
    const opn = this.dialog.open(AddGradeComponent, {
      disableClose: true,
    });

    opn.afterClosed().subscribe(
      (res) => {
        console.log(res);
        this.getData()
      }
    )
  }

  onEdit(edit: any) {
    const dialogRef = this.dialog.open(AddGradeComponent, {
      disableClose: true,
      data: edit
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
        this.getData()
      }
    }
    )

  }

  delete_application(item: any) {
    const dialogRef = this.dialog.open(ConfirmBoxComponentComponent, {
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(item);

      if (this.deletevalue == result) {
        this._crud.Day_delete(item.id).subscribe(
          (res: any) => {
            console.log(res)
            if (res.success == 1) {
              alert(res.message)
              this.getData()
            } else {
              alert(res.message)
            }

          }
        )
      }
      else { }
    });
  }

  onSearch(event: any) {
    const data = event.target.value.toLowerCase();
    console.log(data);

    this.FilterGrade = this.Grade.filter((res: any) =>
      res.day.toString().toLowerCase().includes(data)
    );
  }

}
