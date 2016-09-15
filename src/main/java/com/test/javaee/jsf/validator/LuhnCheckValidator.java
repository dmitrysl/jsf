package com.test.javaee.jsf.validator;

import com.test.javaee.jsf.bean.CreditCardNumber;

import javax.enterprise.context.ApplicationScoped;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.inject.Named;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Created by DmitriyS on 9/15/2016.
 */
@Named
@ApplicationScoped
@FacesValidator()
public class LuhnCheckValidator implements Validator, ConstraintValidator<LuhnCheck, CreditCardNumber> {

    @Override
    public void initialize(LuhnCheck constraintAnnotation) {

    }

    @Override
    public boolean isValid(CreditCardNumber value, ConstraintValidatorContext context) {
        return luhnCheck(value.toString().replaceAll("\\D", ""));
    }

    private boolean luhnCheck(String value) {
        int sum = 0;
        for (int i = value.length() - 1; i >= 0; i -= 2) {
            sum += Integer.parseInt(value.substring(i, i + 1));
            if (i > 0) {
                int d = 2 * Integer.parseInt(value.substring(i - 1, i));
                if (d > 9) d -= 9;
                sum += d;
            }
        }
        return sum % 10 == 0;
    }

    @Override
    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        if (!luhnCheck(value.toString().trim().replaceAll("\\D", ""))) {
            String msg = String.format("Invalid credit card number");
            FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR, msg, msg);
            throw new ValidatorException(message);
        }
    }
}
