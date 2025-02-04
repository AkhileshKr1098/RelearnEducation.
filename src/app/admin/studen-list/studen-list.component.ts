import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudenAddFormComponent } from '../studen-add-form/studen-add-form.component';
import { ConfirmBoxComponentComponent } from '../confirm-box-component/confirm-box-component.component';

@Component({
  selector: 'app-studen-list',
  templateUrl: './studen-list.component.html',
  styleUrls: ['./studen-list.component.scss']
})
export class StudenListComponent {
   applicants = [
    {
      id: 1,
      name: "John Smith",
      grade: "LKG",
      phone: "6202572787",
      email: "john.smith@gmail.com",
      city: "New York"
    },
    {
      id: 2,
      name: "Emily Johnson",
      grade: "UKG",
      phone: "6202572788",
      email: "emily.johnson@gmail.com",
      city: "Los Angeles"
    },
    {
      id: 3,
      name: "Michael Williams",
      grade: "1st Grade",
      phone: "6202572789",
      email: "michael.williams@gmail.com",
      city: "Chicago"
    },
    {
      id: 4,
      name: "Sophia Brown",
      grade: "2nd Grade",
      phone: "6202572790",
      email: "sophia.brown@gmail.com",
      city: "Houston"
    },
    {
      id: 5,
      name: "David Miller",
      grade: "3rd Grade",
      phone: "6202572791",
      email: "david.miller@gmail.com",
      city: "San Francisco"
    }
  ];
  constructor(private dialog: MatDialog) {}

  add_new_std() {
    this.dialog.open(StudenAddFormComponent, {
      disableClose: true,
    });
  }

  delete_application() {
    this.dialog.open(ConfirmBoxComponentComponent,{

      disableClose:true
    })
  }

}
