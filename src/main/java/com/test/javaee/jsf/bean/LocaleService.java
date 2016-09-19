package com.test.javaee.jsf.bean;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;
import java.io.Serializable;
import java.util.*;

/**
 * Created by DmitriyS on 9/14/2016.
 */
@ManagedBean
@SessionScoped
public class LocaleService implements Serializable {
    private static final long serialVersionUID = 7522228269679142048L;

    private static final List<Locale> supportedLocales = Arrays.asList(Locale.US, new Locale("ua"), new Locale("ru"));

    private Locale locale;

    @PostConstruct
    public void init() {
        locale = FacesContext.getCurrentInstance().getExternalContext().getRequestLocale();
    }

    public Locale getLocale() {
        return locale;
    }

    public String getLanguage() {
        return locale.getLanguage();
    }

    // called after submitting form when calling submit() javascript function
    public void setLanguage(String language) {
        Locale newLocale = new Locale(language);
        if (supportedLocales.contains(newLocale)) {
            locale = newLocale;
            FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
        }
    }

    public void changeLanguage(ValueChangeEvent event) {
        String language = event.getNewValue().toString();
        Locale newLocale = new Locale(language);
        if (supportedLocales.contains(newLocale)) {
            locale = newLocale;
            FacesContext.getCurrentInstance().getViewRoot().setLocale(locale);
        }
    }
}
