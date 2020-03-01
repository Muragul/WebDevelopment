import { Injectable } from '@angular/core';
import { JOBS } from './jobs';
import { Observable, of } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

constructor() { }

getJobs(): Observable<Job[]>{
  return of (JOBS);
}

getJob(id: number): Observable<Job>{
  return of(JOBS.find(job=> job.id === id));
}

}
