import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-email-dialog-box',
  templateUrl: './email-dialog-box.component.html',
  styleUrls: ['./email-dialog-box.component.css']
})
export class EmailDialogBoxComponent {

  constructor(private http: HttpClient, injector: Injector,
    @Inject(MAT_DIALOG_DATA) public ownerURL: any) {

  }

  async SendEmail(emailAddress: any) {

    const ownerJSON = await this.http.get(this.ownerURL).toPromise();
    const mailText = `mailto:${emailAddress}?subject=Repository Data&body=${JSON.stringify(ownerJSON)}`;
    window.location.href = mailText;

  }

}

