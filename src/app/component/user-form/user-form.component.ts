import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: User | undefined;

  constructor (
    private route: ActivatedRoute,
    private router: Router, 
    private userService: UserService) {
      this.user = new User();
    }
      onSubmit() {
          // this.userService.save("this.user").subscribe(result => this.gotoUserList());
      }

      gotoUserList() {
        this.router.navigate(['/users']);
      }
}
