import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environment';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-award-period',
  templateUrl: './award-period.component.html',
  styleUrls: ['./award-period.component.css']
})
export class AwardPeriodComponent {
  protected selectedDate?: Date;
  private CLASS_URL = "/award-period"
  protected data: any

  constructor(private http: HttpClient, private user: LoginService) {

  }

  protected searchAwardLevel() {
    const FUNC_URL = "/get"

    let url = `${environment.apiUrl + this.CLASS_URL + FUNC_URL}?date=${this.selectedDate?.toISOString()}`

    this.http
      .get<any>(url)
      .subscribe((result) => {
        this.data = result
      })
  }

  protected deleteAwardLevel(index: number) {
    this.data.awardLevels.splice(index, 1);
  }

  protected newAchievement: string = "";
  protected newValue: number = 0;

  protected addAwardLevel() {
    if (this.newAchievement.trim() === "" || this.newValue == 0) return

    this.data.awardLevels.push({
      achievement: this.newAchievement,
      prizeValue: this.newValue
    })

    this.newAchievement = "";
    this.newValue = 0;
  }

  protected addAwardLevels() {
    const FUNC_URL = "/update"

    const url = environment.apiUrl + this.CLASS_URL + FUNC_URL;
    this.data.dateOfApply = null;

    let token = this.user.getToken();
    if (!token) token = "";
    this.http
      .put(url, this.data, {headers: {Authorize: token}})
      .subscribe((_) => {
        this.data = undefined;
      })
  }
}
