package com.test.javaee.jsf.bean;

import java.math.BigDecimal;

/**
 * Created by DmitriyS on 9/14/2016.
 */
public class Amount {
    private BigDecimal total = BigDecimal.ZERO;
    private Currency currency = Currency.USD;

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }
}
