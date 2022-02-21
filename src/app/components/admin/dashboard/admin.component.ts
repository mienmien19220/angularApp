import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  public userAppData: any;
  public appUser1: any;
  public appUser2: any;
  public appUser3: any;
  public appUser4: any;
  public appUser5: any;
  public userLabel: any;
  public options: any;
  public userUsageHoursData;
  
  constructor() { }

  appUsageData = [
    {name: 'u1', country: 'USA', appname: 'a1' },
    {name: 'u2', country: 'UK', appname: 'a1' },
    {name: 'u3', country: 'Poland', appname: 'a1' },
    {name: 'u4', country: 'Canada', appname: 'a2' },
    {name: 'u5', country: 'Germany', appname: 'a2' },
    {name: 'u6', country: 'USA', appname: 'a3' },
    {name: 'u7', country: 'India', appname: 'a3' },
    {name: 'u8', country: 'Canada', appname: 'a4' },
    {name: 'u9', country: 'India', appname: 'a5' },

  ]
  
  ngOnInit(): void {
    this.appUser1 = this.appUsageData.filter(
      (app) => app.appname === 'a1'
    ).length;
    this.appUser2 = this.appUsageData.filter(
      (app) => app.appname === 'a2'
    ).length;
    this.appUser3 = this.appUsageData.filter(
      (app) => app.appname === 'a3'
    ).length;
    this.appUser4 = this.appUsageData.filter(
      (app) => app.appname === 'a4'
    ).length;
    this.appUser5 = this.appUsageData.filter(
      (app) => app.appname === 'a5'
    ).length;

    this.userLabel = this.appUsageData
    .map((app) => app.appname)
    .filter((value, index, self) => self.indexOf(value) === index);

    this.userAppData = {
      labels: this.userLabel,
      datasets: [
        {
          data: [
            this.appUser1,
            this.appUser2,
            this.appUser3,
            this.appUser4,
            this.appUser5,
          ],
          backgroundColor:[
            '#ff0000',
            '#0000ff',
            '#ffff00',
            '#ffc0cb',
            '#7f00ff',
          ],
        },
      ],
    };

    this.userUsageHoursData = {
      labels: ['Jan', 'Feb', 'March', 'April'],
      datasets:[
        {
          label: 'app-1',
          backgroundColor: '#42A5F5',
          data: [44, 65, 23, 77],
        },
        {
          label: 'app-2',
          backgroundColor: '#ff0000',
          data: [14, 65, 16, 100],
        },

      ],
    };

    this.options = {
      plugins:{
        datalabels: {
          align: 'end',
          anchor: 'end',
          borderRadius: 4,
          backgroundColor: 'teal',
          color: 'white',
          font: {
            weight: 'bold',
          },
        },
        title: {
          display: true,
          fontSize: 16,
        },
        legend: {
          position: 'bottom',
        },
      },
    };
  }
}
