package com.test.javaee.jsf.bean;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;

/**
 * Created by DmitriyS on 9/14/2016.
 */
@Named("payment")
@RequestScoped
public class PaymentBean {
    private Amount amount = new Amount();
    private CreditCard creditCard = new CreditCard();

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

    public CreditCard getCreditCard() {
        return creditCard;
    }

    public void setCreditCard(CreditCard creditCard) {
        this.creditCard = creditCard;
    }
}
