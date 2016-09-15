package com.test.javaee.jsf.producer;

import javax.faces.context.FacesContext;
import javax.inject.Inject;
import java.util.Locale;

/**
 * Created by DmitriyS on 9/15/2016.
 */
public class FacesLocaleResolver {

    @Inject
    private FacesContext facesContext;

    public Locale getLocale() {
        return facesContext.getViewRoot() != null
                ? facesContext.getViewRoot().getLocale()
                : facesContext.getApplication().getViewHandler().calculateLocale(facesContext);
    }
}
