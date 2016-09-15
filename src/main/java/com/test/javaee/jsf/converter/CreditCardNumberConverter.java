package com.test.javaee.jsf.converter;

import com.test.javaee.jsf.bean.CreditCardNumber;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;
import javax.faces.convert.FacesConverter;
import java.util.ResourceBundle;

/**
 * Created by DmitriyS on 9/15/2016.
 */
@ManagedBean
@RequestScoped
@FacesConverter(value = "creditCardNumberConverter", forClass = CreditCardNumber.class)
public class CreditCardNumberConverter implements Converter {

    @ManagedProperty("#{msgs}")
    private ResourceBundle resourceBundle;

    @Override
    public Object getAsObject(FacesContext context, UIComponent component, String value) {
        StringBuilder builder = new StringBuilder(value);

        boolean foundInvalidCharacter = false;
        char invalidCharacter = '\0';
        int i = 0;

        while (i < builder.length() && !foundInvalidCharacter) {
            char ch = builder.charAt(i);
            if (Character.isDigit(ch)) {
                i++;
            } else if (Character.isWhitespace(ch)) {
                builder.deleteCharAt(i);
            } else {
                foundInvalidCharacter = true;
                invalidCharacter = ch;
            }
        }

        if (foundInvalidCharacter) {
            String msg = String.format("Found invalid character: %s", invalidCharacter);
            FacesMessage message = new FacesMessage(FacesMessage.SEVERITY_ERROR, msg, msg);
            throw new ConverterException(message);
        }

        return new CreditCardNumber(value);
    }

    @Override
    public String getAsString(FacesContext context, UIComponent component, Object value) {
        // 13 xxxx xxx xxx xxx
        // 14 xxxxx xxxx xxxxx
        // 15 xxxx xxxxxx xxxxx
        // 16 xxxx xxxx xxxx xxxx
        // 22 xxxxxx xxxxxxxx xxxxxxxx

        String v = value.toString().trim().replaceAll("\\s", "");
        int[] boundries = null;
        int length = v.length();
        if (length == 13) {
            boundries = new int[] {4, 7, 10};
        } else if (length == 14) {
            boundries = new int[] {5, 9};
        } else if (length == 15) {
            boundries = new int[] {4, 10};
        } else if (length == 16) {
            boundries = new int[] {4, 8, 12};
        } else if (length == 22) {
            boundries = new int[] {6, 14};
        } else {
            return v;
        }

        StringBuilder result = new StringBuilder();
        int start = 0;
        for (int end : boundries) {
            result.append(v.substring(start, end));
            result.append(" ");
            start = end;
        }
        result.append(v.substring(start));

        return result.toString();
    }
}
