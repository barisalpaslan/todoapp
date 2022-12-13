import { TodoItem } from './todoitem';

export class Model {
  name :string;
  items: TodoItem[];

  constructor( ){
    this.name = "Barış";
    this.items = [
      {
        id : 1,
        description : "acıklama",
        action : true
      },
      {
        id : 2,
        description : "acıklama2",
        action : true
      },
      {
        id : 3,
        description : "acıklama3",
        action : false
      },
      {
        id : 4,
        description : "acıklama4",
        action : false
      }
    ]
  }
}
