export class Answer {

  private _status: 'default' | 'selected' | 'answered' | 'correct';
  public get answer(): string {
    return this._answer;
  }
  public get isCorrect(): boolean {
    return this._isCorrect;
  }
  public get status(): 'default' | 'selected' | 'answered' | 'correct' {
    return this._status;
  }
  public set status(value: 'default' | 'selected' | 'answered' | 'correct') {
    this._status = value;
  }
  constructor(
    private _answer: string,
    private _isCorrect: boolean
  ) {
    this._status = 'default';
  }
}
