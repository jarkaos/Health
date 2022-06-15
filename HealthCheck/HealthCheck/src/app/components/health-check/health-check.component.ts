import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css'],
})
export class HealthCheckComponent implements OnInit {
  public result?: IResult;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<IResult>(environment.base + 'api/health').subscribe(
      (result) => {
        this.result = result;
      },
      (error) => console.error(error)
    );
  }
}

interface IResult {
  checks: ICheck[];
  totalStatus: string;
  totalResponseTime: number;
}

interface ICheck {
  name: string;
  responseTime: number;
  status: string;
  description: string;
}
