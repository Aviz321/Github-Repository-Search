import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmailDialogBoxComponent } from './email-dialog-box/email-dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Item } from './models/item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiSite';

  RepositoryData: any;
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  OpenDialog(ownerURL: any) {
    const dialogRef = this.dialog.open(EmailDialogBoxComponent, {
      data: ownerURL
    });
  }

  async SearchRepository(searchText: any): Promise<void> {
    await this.http.get("https://api.github.com/search/repositories?q=" + searchText).subscribe(d => this.RepositoryData = d);
  }

  saveBookmark(item: Item): void{
    this.http.post('http://localhost:21149/bookmark',item).subscribe( item =>{
      console.log("returned item:", item);
    })
  }

}
