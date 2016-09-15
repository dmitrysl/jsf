package com.test.javaee.jsf.bean;

import com.test.javaee.jsf.validator.LuhnCheck;

import javax.validation.constraints.Future;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.regex.Pattern;

/**
 * Created by DmitriyS on 9/14/2016.
 */
public class CreditCard {

    private static final Pattern visaPattern = Pattern.compile("^4[0-9]{12}(?:[0-9]{3})?$");
    private static final Pattern mastercardPattern = Pattern.compile("^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$");
    private static final Pattern americanExpressPattern = Pattern.compile("^3[47][0-9]{13}$");

    public enum Type {NONE, VISA, MASTERCARD, AMERICAN_EXPRESS}

    private Type type = Type.NONE;
    @LuhnCheck
    private CreditCardNumber cardNumber;
    @Size(min = 3)
    private String cardHolder;
    @Future
    private Date expirationDate;
    private int securityCode;

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public CreditCardNumber getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(CreditCardNumber cardNumber) {
        this.cardNumber = cardNumber;
        defineCreditCardType(cardNumber);
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

    private void defineCreditCardType(CreditCardNumber cardNumber) {
        if (cardNumber != null && cardNumber.toString() != null && !cardNumber.toString().isEmpty()) {
            String number = cardNumber.toString().trim().replaceAll("\\s", "");
            if (visaPattern.matcher(number).matches()) {
                type = Type.VISA;
            } else if (mastercardPattern.matcher(number).matches()) {
                type = Type.MASTERCARD;
            } else if (americanExpressPattern.matcher(number).matches()) {
                type = Type.AMERICAN_EXPRESS;
            }
        }
    }
}
