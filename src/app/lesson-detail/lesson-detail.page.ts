import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Lesson, Student } from '../services/data.service';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.page.html',
  styleUrls: ['./lesson-detail.page.scss'],
})
export class LessonDetailPage implements OnInit {
  lesson = {} as Lesson;
  students = [] as Student[];

  qrdata = '';
  width = 200;
  errorCorrectionLevel = 'M';

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    const lessonId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('lessonId: ', lessonId);
    if (lessonId) {
      this.dataService.getLessonById(parseInt(lessonId)).subscribe((lesson) => {
        console.log('lesson: ', lesson);
        this.lesson = lesson;
        this.qrdata = (lesson?.id || '').toString();

        if (lesson?.id) {
          this.dataService
            .getStudentsByLesson(lesson.id)
            .subscribe((students) => {
              console.log('students: ', students);
              this.students = students;
            });
        }
      });
    }
  }
}
