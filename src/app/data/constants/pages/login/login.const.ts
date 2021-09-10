import { ERRORS_VALIDATION } from "@data/constants";
import { IMAGE_ROUTES } from "@data/constants/img-url.const";
import { ENUM_VALIDATION_OPTIONS } from "@data/enums";
import { IField } from "@data/interfaces/forms/ifield.metadata";
import { ValidationService } from "@shared/services/validation/validation.service";

export const CONST_LOGIN_PAGE: {
  FORM: {
    email: IField;
    password: IField;
  };
  STYLE_BACKGROUND: any;
  LOGO: string;
} = {
  FORM: {
    email: {
      val: '',
      error: ERRORS_VALIDATION.EMAIL_REQUIRED,
      isValid(){
        const validationService = new ValidationService();
        const validateEmail = validationService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);
        this.error = validateEmail.msg;
        return validateEmail.isValid;
      }
    },
    password: {
      val: '',
      error: ERRORS_VALIDATION.PASSWORD_REQUIRED,
      isValid(){
        const validationService = new ValidationService();
        const validatePass = validationService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
        this.error = validatePass.msg;
        return validatePass.isValid;
      }
    }
  },
  STYLE_BACKGROUND: {
    backgroundImage: `url(${IMAGE_ROUTES.BACKGROUND_LOGIN_SCR})`
  },
  LOGO: IMAGE_ROUTES.LOGO
}
