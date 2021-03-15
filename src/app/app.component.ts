import { LaunchdetailsService } from './launchdetails.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SpaceX';




  // isLand:boolean = true;

  launch_year: any;
  missionData: any;
  launchSuccessData: any;
  fetchData: any;



  // switchLaunchMode(){
  //   const isLaunched:boolean = true;

  //   console.log(isLaunched);
  // }

  // switchLandMode(){
  //   this.isLand = !this.isLand;
  // }




  SearchYear(value) {
    console.log(value)
    this.launch_year = value;
    this.launchdetail.getDatabyYear(this.launch_year).subscribe((res: any) => {
      console.log(res);
      this.missionData = res;

    })


  }



  SuccessfulLaunch(value) {
    if (this.launch_year) {


      console.log(value)
      var launchedSuccessfully = value;
      var launchYear = this.launch_year;
      console.log(launchYear);
      this.launchdetail.getlaunchSuccess(launchedSuccessfully, launchYear).subscribe((res: any) => {
        console.log(res);
        this.missionData = res;


      })

    } else {
      // console.log("error found");
      this.launchdetail.getlaunchSuccess(launchedSuccessfully, launchYear).subscribe((res: any) => {
        console.log(res);
        this.missionData = res;


      })
    }
  }



  SuccessfulLand(value) {

    if (this.launch_year) {


      console.log(value)
      var landeddSuccessfully = value;
      var launchYear = this.launch_year;
      console.log(launchYear);
      this.launchdetail.getlandSuccess(landeddSuccessfully, launchYear).subscribe((res: any) => {
        console.log(res);
        this.missionData = res;


      })

    } else {
      // console.log("error found");
      this.launchdetail.getlandSuccess(landeddSuccessfully, launchYear).subscribe((res: any) => {
        console.log(res);
        this.missionData = res;


      })
    }
  }





  constructor(private launchdetail: LaunchdetailsService) {
    this.launchdetail.launchSuccess().subscribe((data: any) => {
      this.launchSuccessData = data;
      console.log(this.launchSuccessData);
    }, err => {
      console.log(err)
    })

  }




  ngOnInit(): void {
    this.launchdetail.getData().subscribe((data: any) => {
      this.missionData = data;
      console.log(this.missionData);
    }, err => {
      console.log(err)
    }

    )
  }



}


