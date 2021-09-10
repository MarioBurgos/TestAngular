import { Injectable } from '@angular/core';
import { ERRORS_VALIDATION } from '@data/constants/errors/errors-validation.const';
import { ENUM_VALIDATION_OPTIONS } from '@data/enums';
import { IResponseValidation } from '@data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  /**
   * This method validates each field of the form
   * @param field
   * @param type
   * @returns
   */
  validateField(field: any, type: ENUM_VALIDATION_OPTIONS) {
    switch (type) {
      case ENUM_VALIDATION_OPTIONS.EMAIL:
        return this.validateEmail(field) ;
      case ENUM_VALIDATION_OPTIONS.PASSWORD:
        return this.validatePassword(field);
    }
  }

  /**
   * This method validates an email with a pattern.
   * @param value any
   * @returns res{msg: string, isValid: boolean}
   */
  private validateEmail(value: any): IResponseValidation{
    const res: IResponseValidation = { msg: '', isValid: true};
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[[0-9]{1,3}\.[[0-9]{1,3}\.[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    res.isValid = pattern.test(value);
    res.msg = (value === '') ? ERRORS_VALIDATION.EMAIL_REQUIRED : ERRORS_VALIDATION.EMAIL_INVALID;
    return res;
  }

  /**
   * This method validates a password with a pattern.
   * @param value
   * @returns
   */
  private validatePassword(value: any): IResponseValidation{
    const res: IResponseValidation = {msg: '', isValid: true};
    const pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/;
    res.isValid = pattern.test(value);
    res.msg = ( value === '') ? ERRORS_VALIDATION.PASSWORD_REQUIRED : ERRORS_VALIDATION.PASSWORD_REQ_PATTERN;
    return res;
  }
}
