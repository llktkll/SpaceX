import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

const baseURL = "https://api.spaceXdata.com/v3/launches";

@Injectable({
  providedIn: 'root'
})
export class LaunchdetailsService {


  
  constructor(private http: HttpClient) { }




getData() {
  let url = "https://api.spaceXdata.com/v3/launches?limit=100";
  return this.http.get(url);
}



launchSuccess() {
let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
return this.http.get(url);
}




launchAndLand() {
let url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
return this.http.get(url);
}


getDatabyYear(launch_year:any):Observable<any>{
return this.http.get<any>(`${baseURL}?launch_year=${launch_year}`);

}

// https://api.spaceXdata.com/v3/launches ?launch_success=true&launch_year=2006

getlaunchSuccess(launch_success:any, year:any):Observable<any>{
return this.http.get<any>(`${baseURL}?launch_success=${launch_success}&launch_year=${year}`);
}


getlandSuccess(land_success:any, year:any):Observable<any>{
return this.http.get<any>(`${baseURL}?land_success=${land_success}&launch_year=${year}`);
}


}

