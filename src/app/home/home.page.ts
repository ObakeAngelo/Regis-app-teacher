import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  teacherId: number = 0;
  lessonList: any = [];

  constructor(
    private authService: AuthenticationService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.teacherId = this.authService.getTeacherId();
    this.dataService
      .getLessonsByTeacher(this.teacherId)
      .subscribe((lessons) => {
        console.log(lessons);
        this.lessonList = lessons;
      });
  }

  logout() {
    this.authService.logout();
  }

  createLesson() {
    this.router.navigate(['/lesson']);
  }

  goToLessonDetail(id: number) {
    this.router.navigate(['/lesson-detail', id]);
  }
}
