import { TodoItem } from './../todoitem';
import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  model = new Model();

  displayAll : boolean = true;

  inputText : string = "";

  addItem(){
    if(this.inputText != ""){
      let data = {
        id : 1,
        description : this.inputText,
        action :false
      }
       this.model.items.push(data);

       let items = this.getItemsFromLS();
       items.push(data);
       localStorage.setItem("items",JSON.stringify(items));

       this.inputText = "";
    }
    else
    {
     alert("Bir todo bilgisi giriniz !");
    }
  }
  getItemsFromLS(){
    let items : TodoItem[] = [];

    let value = localStorage.getItem("items");

    if(value != null){
      items = JSON.parse(value);
    }

    return items;
  }

  onActionChanged(item:TodoItem){
    let items = this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i => {
      if(i.description == item.description)
      {
        i.action = item.action;
      }
    });

    localStorage.setItem("items",JSON.stringify(items));
  }

  getName(){
    return this.model.name;
  }

  getItems(){
    if(this.displayAll){
    return this.model.items;
    }
    else{
    return this.model.items.filter(item=>item.action === false);
    }
  }

  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }

  getBtnClasses(){
     return {
      'disabled' : this.inputText.length == 0,
      'btn-secondary' :  this.inputText.length == 0,
      'btn-primary' :  this.inputText.length > 0}
    }
}
