import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor( private spinner: SpinnerService) {}

  timer: NodeJS.Timeout | undefined;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.timer){
      clearTimeout(this.timer);
    }
   
    this.timer = setTimeout(() => this.spinner.show(),1000);
  

    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.hide();
        if(this.timer){
          clearTimeout(this.timer);
        }
      })
    )
  }
}
