import { LaunchdetailsService } from './launchdetails.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceX';





  missionData: any;
  launchSuccessData: any;
  fetchData: any;





  SearchYear(value) {
    console.log(value)
    let launch_year = value;
    this.launchdetail.getDatabyYear(launch_year).subscribe((res: any) => {
      console.log(res);
      this.missionData =res;

    })

    
  }

  SuccessfulLaunch(value) {
    console.log(value)
    let launch_success = value;
    this.launchdetail.getlaunchSuccess(launch_success).subscribe((res: any) => {
      console.log(res);
      this.missionData =res;
      // this.sendToParent();

    })

  }

  SuccessfulLand(value) {
    console.log(value)
    let land_success = value;
    this.launchdetail.getlaunchSuccess(land_success).subscribe((res: any) => {
      console.log(res);
      this.missionData =res;
    

    })

  }

 


  // launchyear = ${launch_year}
  // launchsuccess = ${launch_success}
  //landsuccess = ${land_success}
  // call a function {this function should include functionality
  //  to change the url based on the data in the button}
  //  where 



  // Adding alt text for missing mission ID 

  // if (){
  //   document.getElementById(missionId).innerText = "No mission ID Found"
  // }


  constructor(private launchdetail: LaunchdetailsService) {
    this.launchdetail.launchSuccess().subscribe((data: any) => {
      // console.log(data);
      this.launchSuccessData = data;
      // this.fetchData = this.missionData.
      console.log(this.launchSuccessData);



    }, err => {
      console.log(err)
    }

    )
  }




  ngOnInit(): void {
    this.launchdetail.getData().subscribe((data: any) => {
      // console.log(data);
      this.missionData = data;
      // this.fetchData = this.missionData.
      console.log(this.missionData);



    }, err => {
      console.log(err)
    }

    )
  }



}


