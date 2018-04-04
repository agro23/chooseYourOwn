import { Item } from './item.model'

export class User{
  public items: Item[];
  public karma: 0;
  public money: 0;
  static key: string;

  constructor(public name: string, public charm: number, public con: number) {}
}
