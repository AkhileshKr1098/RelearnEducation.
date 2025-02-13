import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CRUDService } from 'src/app/crud.service';
import { Grade, GradeRes, Section } from 'src/app/interface/Question.interface';
import { AddSectionComponent } from '../add-section/add-section.component';
import { ConfirmBoxComponentComponent } from '../../confirm-box-component/confirm-box-component.component';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent {
  Sections: Section[] = []
  FilterSection: Section[] = []
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
    this._crud.getSection().subscribe(
      (res: GradeRes) => {
        console.log(res);
        if (Array.isArray(res.data)) {
          this.Sections = res.data
          this.FilterSection= res.data
        }
      }, (err: Error) => {
        console.log(err);

      }
    )
  }

  addNew() {
    const opn = this.dialog.open(AddSectionComponent, {
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
    const dialogRef = this.dialog.open(AddSectionComponent, {
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
