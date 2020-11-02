import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive';

  loginForm = new FormGroup({
    username: new FormControl('Nirmal'),
    password: new FormControl('123')
  })
  collectData() {
    console.warn(this.loginForm.value);
  }
}
