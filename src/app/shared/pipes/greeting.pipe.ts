import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(name: string, gender?: string, role: string = 'User'): any {
    const greeting =  (gender === 'F') ? 'Welcome Mrs.' : 'Welcome Mr.';
    return `${greeting} ${name}, your role is ${role}`;
  }

}
