package com.test.javaee.jsf.util;

import javax.faces.application.Application;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import java.text.MessageFormat;
import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

/**
 * Created by DmitriyS on 9/15/2016.
 */
public class Messages {
    public static final String DEFAULT_BUNDLE  = "javax.faces.Messages";

    public static FacesMessage getMessage(String resourceId, Object... params) {
        return getMessage(DEFAULT_BUNDLE, resourceId, params);
    }

    public static FacesMessage getMessage(String bundleName, String resourceId, Object... params) {
        FacesContext ctx = FacesContext.getCurrentInstance();
        Application app = ctx.getApplication();
        String appBundle = app.getMessageBundle();
        String summary = getString(appBundle, bundleName, resourceId, params);
        if (summary == null) summary = "???" + resourceId + "???";
        String details = getString(appBundle, bundleName, resourceId + "_detail", params);
        return new FacesMessage(summary, details);
    }

    public static String getString(String resourceId, Object... params) {
        FacesContext ctx = FacesContext.getCurrentInstance();
        Application app = ctx.getApplication();
        String appBundle = app.getMessageBundle();
        return getString(appBundle, DEFAULT_BUNDLE, resourceId, params);
    }

    public static String getString(String bundleName, String resourceId, Object... params) {
        FacesContext ctx = FacesContext.getCurrentInstance();
        Application app = ctx.getApplication();
        String appBundle = app.getMessageBundle();
        return getString(appBundle, bundleName, resourceId, getLocale(ctx), getClassLoader(), params);
    }

    public static String getString(String appBundle, String bundleName, String resourceId, Object... params) {
        FacesContext ctx = FacesContext.getCurrentInstance();
        return getString(appBundle, bundleName, resourceId, getLocale(ctx), getClassLoader(), params);
    }

    public static String getString(String appBundle, String bundleName, String resourceId, Locale locale, ClassLoader loader, Object... params) {
        String resource = null;

        if (appBundle != null) {
            resource = getStringResource(appBundle, resourceId, locale, loader);
        }

        if (resource == null && bundleName != null) {
            resource = getStringResource(bundleName, resourceId, locale, loader);
        }

        if (resource == null) return null;
        if (params == null) return resource;

        return new MessageFormat(resource, locale).format(params);
    }

    private static String getStringResource(String appBundle, String resourceId, Locale locale, ClassLoader loader) {
        ResourceBundle bundle = ResourceBundle.getBundle(appBundle, locale, loader);
        if (bundle != null) {
            try {
                return bundle.getString(resourceId);
            } catch (MissingResourceException ex) {
                // NOP
            }
        }
        return null;
    }

    private static Locale getLocale(FacesContext ctx) {
        return ctx.getViewRoot() != null
                ? ctx.getViewRoot().getLocale()
                : ctx.getApplication().getViewHandler().calculateLocale(ctx);
    }

    private static ClassLoader getClassLoader() {
        ClassLoader loader = Thread.currentThread().getContextClassLoader();
        if (loader == null) loader = ClassLoader.getSystemClassLoader();
        return loader;
    }
}
