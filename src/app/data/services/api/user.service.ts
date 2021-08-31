import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {

  private title:string;

  constructor(
    http: HttpClient
  ) {
    super(http);
    this.title = "Original Title from user.service"
  }
  get getTitle(): string {
    return this.title;
  }
  setTitle(t: string) {
    this.title = t;
  }
  clearTitle() {
    this.title = "empty title"
  }


  /**
   * Get all users from API
   * @returns all Users
   */
  getAllUsers(): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser[]
  }> {
    const response = { error: false, msg: '', data: [] as ICardUser[] };
    return this.http.get<ICardUser[]>(this.url + 'users')
      .pipe(
        map(r => {
          response.data = r;
          return response;
        }),
        catchError(() => of(response))
      );

  }

  /**
   * Gets one user by his id
   * @param id: number
   * @returns
   */
  getUserById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser
  }> {
    const response = { error: false, msg: '', data: {} as ICardUser };
    return this.http.get<ICardUser>(this.url + 'users/' + id)
      .pipe(map(r => {
        response.data = r;
        return response;
      }),
        catchError(() => of(response))
      );
  }

}
