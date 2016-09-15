package com.test.javaee.jsf.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * Created by DmitriyS on 9/15/2016.
 */
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = LuhnCheckValidator.class)
public @interface LuhnCheck {
    String message() default "{com.test.javaee.jsf.LuhnCheck.message}";
    Class[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
