package com.test.javaee.jsf.bean;

/**
 * Created by DmitriyS on 9/14/2016.
 */
public class Currency {
    public static Currency USD = new Currency("", Code.USD, "$");
    public static Currency EUR = new Currency("", Code.EUR, "€");
    public static Currency UAH = new Currency("", Code.UAH, "₴");

    public enum Code {USD, EUR, UAH}

    private String name;
    private Code code;
    private String symbol;

    public Currency() {
    }

    public Currency(String name, Code code, String symbol) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public static Currency getUSD() {
        return USD;
    }

    public static void setUSD(Currency USD) {
        Currency.USD = USD;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Code getCode() {
        return code;
    }

    public void setCode(Code code) {
        this.code = code;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }
}
