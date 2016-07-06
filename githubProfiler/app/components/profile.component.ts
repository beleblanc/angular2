import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  public user: Observable<any>;
  public repos: Array<number> = [];
  public username: string;

  constructor(private _githubService: GithubService) {

  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
