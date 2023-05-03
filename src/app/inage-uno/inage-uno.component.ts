import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inage-uno',
  templateUrl: './inage-uno.component.html',
  styleUrls: ['./inage-uno.component.sass']
})
export class InageUnoComponent implements OnInit{
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://192.168.1.97:8080/inage-uno')
      .subscribe(response => {
        this.data = response;
        console.log(this.data)
      });
  }


}
