package com.test.javaee.jsf.bean;

import java.util.Date;

/**
 * Created by DmitriyS on 9/14/2016.
 */
public class CreditCard {

    public enum Type {NONE, VISA, MASTERCARD};

    private Type type = Type.NONE;
    private String cardNumber;
    private String cardHolder;
    private Date expirationDate;
    private int securityCode;

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardHolder() {
        return cardHolder;
    }

    public void setCardHolder(String cardHolder) {
        this.cardHolder = cardHolder;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public int getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(int securityCode) {
        this.securityCode = securityCode;
    }
}
