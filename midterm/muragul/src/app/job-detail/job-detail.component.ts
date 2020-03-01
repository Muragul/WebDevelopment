import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../jobs.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job;

  constructor(
    private jobsService: JobsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getJob();
  }

  getJob(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobsService.getJob(id)
      .subscribe(job => this.job = job);
  }

  Like(): void{
    this.job.like_count++;
  }

  goBack(): void{
    this.location.back();
  }

}
