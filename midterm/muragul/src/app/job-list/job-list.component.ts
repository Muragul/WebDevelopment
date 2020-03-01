import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[];

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void{
    this.jobsService.getJobs()
        .subscribe(jobs => this.jobs = jobs);
  }

}
