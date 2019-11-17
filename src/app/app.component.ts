import { SupportDialogComponent } from './core/dialogs/support-dialog/support-dialog.component';
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-admin-dashboard';
  // @HostBinding('class.mdl-layout__header-row') public readonly mdlLayoutHeaderRow = true;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  navigate(destination: string): void {
    this.router.navigate([destination]);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SupportDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
