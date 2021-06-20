import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private name = 'User';
   name1 = 'User';

  public rows:string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  public columns:boolean[][] =
  [
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true],
  ]

  public toggle(row:
    number  ,
    column:
    number):
    void {
    this.columns[row][column] = !this.columns[row][column];
  }
}
