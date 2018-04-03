import { Item } from './item.model'

export class Map{

  public items: Item[]
  public visted: boolean;
  constructor(public name: string, public shrtDesc: string, public longDesc: string,) {}
}
