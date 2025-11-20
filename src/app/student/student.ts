import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name:string = "Kumar";
  age:number = 0;
  city:string = "Banglore";
  msg:string = ''

  studs:any [] = [];

  addStudent(){
    let s = {name:this.name, age:this.age, city:this.city};
    this.studs.push(s);
    this.msg = "Saved Successfully...";
  }

  showStudents(){
    console.log(this.studs);
  }

}
