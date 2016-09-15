package com.test.javaee.jsf.bean;

import java.io.Serializable;

/**
 * Created by DmitriyS on 9/15/2016.
 */
public class CreditCardNumber implements Serializable {
    private static final long serialVersionUID = 9017287136631792981L;

    private String value;

    public CreditCardNumber(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
