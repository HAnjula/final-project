export class OrderDto {
  constructor(
    public customer:any,
    public items:any,
    public total:number,
    public address:any,
    public contact:any,
    public date:Date
  ) {
  }
}
