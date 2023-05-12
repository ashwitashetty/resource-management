import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getAllEmployeeDetails() {
    return this.http.get(
      'https://project-management-tool-dff6f-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json',
      {
        params: {
          key: 'AIzaSyDEenVAbz9MYo4r96CxIfxLPFNQcyrMD1U',
        },
      }
    );
  }
  addEmployeeData(data:any){
return this.http.post('https://project-management-tool-dff6f-default-rtdb.asia-southeast1.firebasedatabase.app/employees.json',data)
  }

}
