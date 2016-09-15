package com.test.javaee.jsf.producer;

import javax.enterprise.inject.Produces;
import javax.faces.context.FacesContext;
import javax.inject.Inject;
import java.util.Locale;
import java.util.ResourceBundle;

/**
 * Created by DmitriyS on 9/15/2016.
 */
public class ResourceBundleProducer {

    @Inject
    private FacesContext facesContext;

    @Inject
    private Locale locale;

    @Produces
    public ResourceBundle getResourceBundle() {
        return ResourceBundle.getBundle("/messages", facesContext.getViewRoot().getLocale());
    }
}
