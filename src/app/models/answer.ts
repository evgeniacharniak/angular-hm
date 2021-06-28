export class Answer {
  public get id(): number {
    return this._id;
  }

  public get text(): string {
    return this._text;
  }

  // public get isCorrect(): boolean {
  //   return this._isCorrect;
  // }

  constructor(
    private _id: number,
    private _text: string
    // ,private _isCorrect: boolean
  ) {
  }
}
