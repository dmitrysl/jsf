package com.test.javaee.jsf.producer;

import javax.enterprise.context.ContextNotActiveException;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.Produces;
import javax.faces.context.FacesContext;

/**
 * Created by DmitriyS on 9/15/2016.
 */
public class FacesContextProducer {

    @Produces
    @RequestScoped
    public FacesContext getFacesContext() {
        FacesContext ctx = FacesContext.getCurrentInstance();
        if (ctx == null) throw new ContextNotActiveException("FacesConotext is not active");
        return ctx;
    }
}
