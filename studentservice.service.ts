import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students=[
            {"Name":"Mohammad Salman","Registration":"201900248","Department":"CSE","Semester":5},
            {"Name":"Mahesh","Registration":"202000110","Department":"ECE","Semester":3},
            {"Name":"Kirthana","Registration":"201800199","Department":"ME","Semester":7},
            {"Name":"Vishnu","Registration":"201900300","Department":"CSE","Semester":5},
            {"Name":"Harshini","Registration":"202000001","Department":"CE","Semester":1}
          ]
  getdetails()
  {
    return this.students
  }
  constructor() { }
}
