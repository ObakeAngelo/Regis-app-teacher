import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { DataService, Lesson } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  lessonName: string = '';
  lessonDate: string = '';
  teacherId: number = 0;

  constructor(
    private authService: AuthenticationService,
    private dataService: DataService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.teacherId = this.authService.getTeacherId();
  }

  createLesson() {
    console.log('lessonName: ', this.lessonName);
    console.log('lessonDate: ', this.lessonDate);

    const lesson: Lesson = {
      name: this.lessonName,
      description: this.lessonName,
      teacher: this.teacherId,
      date: this.lessonDate,
    };

    this.dataService.postLesson(lesson).subscribe((data) => {
      console.log('data: ', data);
      this.presentToast('Clase creada');
      this.router.navigate(['/home']);
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
