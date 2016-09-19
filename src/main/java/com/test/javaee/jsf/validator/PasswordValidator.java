package com.test.javaee.jsf.validator;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

/**
 * Created by DmitriyS on 9/19/2016.
 */
@FacesValidator("jsf.validator.password")
public class PasswordValidator implements Validator {

    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Object o) throws ValidatorException {
        String pwd = (String) o;
        if (pwd.contains("@")) {
            throw new ValidatorException(new FacesMessage("Password cannot contain @"));
        }
    }
}
