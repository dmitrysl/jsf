package com.test.javaee.jsf.bean;

import javax.enterprise.context.RequestScoped;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import javax.servlet.ServletException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.sql.SQLException;
import java.util.Map;

/**
 * Created by DmitriyS on 9/21/2016.
 */
@Named("error")
@RequestScoped
public class ErrorBean {

    public String getStackTrace() {
        FacesContext context = FacesContext.getCurrentInstance();
        Map<String, Object> request = context.getExternalContext().getRequestMap();
        Throwable ex = (Throwable) request.get("javax.servlet.error.exception");
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        fillStackTrace(ex, pw);
        return sw.toString();
    }

    private void fillStackTrace(Throwable t, PrintWriter w) {
        if (null == t) return;
        t.printStackTrace(w);
        if (t instanceof ServletException) {
            Throwable cause = ((ServletException) t).getRootCause();
            if (null != cause) {
                w.println("Root cause:");
                fillStackTrace(cause, w);
            }
        } else if (t instanceof SQLException) {
            Throwable cause = ((SQLException) t).getNextException();
            if (null != cause) {
                w.println("Next exception:");
                fillStackTrace(cause, w);
            }
        } else {
            Throwable cause = t.getCause();
            if (null != cause) {
                w.println("Cause:");
                fillStackTrace(cause, w);
            }
        }
    }
}
