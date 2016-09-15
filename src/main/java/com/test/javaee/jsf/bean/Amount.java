package com.test.javaee.jsf.bean;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Created by DmitriyS on 9/14/2016.
 */
public class Amount implements Serializable {
    private static final long serialVersionUID = 8248082846573338293L;

    @Min(0)
    @Max(10000)
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
