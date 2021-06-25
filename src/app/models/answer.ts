export class Answer {

  public get answer(): string {
    return this._answer;
  }
  public get isCorrect(): boolean {
    return this._isCorrect;
  }
  // private _status: 'default' | 'selected' | 'answered';
  // public get status(): 'default' | 'selected' | 'answered' {
  //   return this._status;
  // }
  // public set status(value: 'default' | 'selected' | 'answered') {
  //   this._status = value;
  // }
  constructor(
    private _answer: string,
    private _isCorrect: boolean
  ) {
    // this._status = 'default';
  }
}
