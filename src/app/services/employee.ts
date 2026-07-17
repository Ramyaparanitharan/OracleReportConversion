import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn : 'root'
})

export class Employee {
    constructor(private http : HttpClient){}
    getEmployee(department : string){
        return this.http.get(`http://localhost:3000/employee-report/${department}`)
    }
}