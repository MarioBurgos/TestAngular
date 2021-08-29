import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "environments/environment";
import { of } from "rxjs";

export class ApiClass{

  public url = environment.uri;
  public isProduction = environment.production;

  constructor(
    protected http: HttpClient

  ){

  }

  error(err: HttpErrorResponse){
    let errorMsg = '';
    if (err.error instanceof ErrorEvent){
      errorMsg = err.error.message;
    }else{
      errorMsg = `error code: ${err.status}\nMessage: ${err.message}`;
    }
    return of({error: true, msg: errorMsg, data: null});
  }

}
