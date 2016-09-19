package com.test.javaee.jsf.component;

import javax.faces.application.Resource;
import javax.faces.component.UIComponent;
import javax.faces.component.UINamingContainer;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by DmitriyS on 9/19/2016.
 */
public abstract class BaseUINamingContainer extends UINamingContainer {
    private static final String propertiesExt = ".properties";

    private Map<String, String> resourceBundleMap = null;

    @Override
    public Map<String, String> getResourceBundleMap() {
        if (null != this.resourceBundleMap) return this.resourceBundleMap;

        ResourceBundle resourceBundle = null;
        String className = this.getClass().getName();
        Locale currentLocale = null;
        FacesContext context = null;
        UIViewRoot root = null;

        if (null != (context = FacesContext.getCurrentInstance()) && null != (root = context.getViewRoot())) {
            currentLocale = root.getLocale();
        }

        if (null == currentLocale) {
            currentLocale = Locale.getDefault();
        }

        try {
            resourceBundle = ResourceBundle.getBundle(className, currentLocale);
        } catch (MissingResourceException var18) {
            // NOP
        }

        if (null == resourceBundle && this.getAttributes().containsKey("javax.faces.application.Resource.ComponentResource")) {
            Resource bundle = (Resource)this.getAttributes().get("javax.faces.application.Resource.ComponentResource");
            if (null != bundle && null != (bundle = this.findComponentResourceBundleLocaleMatch(context, bundle.getResourceName(), bundle.getLibraryName(), currentLocale))) {
                resourceBundle = readResourceBundle(bundle);
            }
        }

        if (null != resourceBundle) {
            final ResourceBundle finalResourceBundle = resourceBundle;
            this.resourceBundleMap = new Map() {
                public String toString() {
                    StringBuffer sb = new StringBuffer();
                    Iterator entries = this.entrySet().iterator();

                    while (entries.hasNext()) {
                        Entry cur = (Entry)entries.next();
                        sb.append((String)cur.getKey()).append(": ").append(cur.getValue()).append('\n');
                    }

                    return sb.toString();
                }

                public void clear() {
                    throw new UnsupportedOperationException();
                }

                public boolean containsKey(Object key) {
                    boolean result = false;
                    if (null != key) {
                        result = null != finalResourceBundle.getObject(key.toString());
                    }

                    return result;
                }

                public boolean containsValue(Object value) {
                    Enumeration keys = finalResourceBundle.getKeys();
                    boolean result = false;

                    while (keys.hasMoreElements()) {
                        Object curObj = finalResourceBundle.getObject((String)keys.nextElement());
                        if(curObj == value || null != curObj && curObj.equals(value)) {
                            result = true;
                            break;
                        }
                    }

                    return result;
                }

                public Set<Entry<String, Object>> entrySet() {
                    HashMap mappings = new HashMap();
                    Enumeration keys = finalResourceBundle.getKeys();

                    while (keys.hasMoreElements()) {
                        String key = (String)keys.nextElement();
                        Object value = finalResourceBundle.getObject(key);
                        mappings.put(key, value);
                    }

                    return mappings.entrySet();
                }

                public boolean equals(Object obj) {
                    return obj != null && obj instanceof Map && this.entrySet().equals(((Map)obj).entrySet());
                }

                public Object get(Object key) {
                    if (null == key) {
                        return null;
                    } else {
                        try {
                            return finalResourceBundle.getObject(key.toString());
                        } catch (MissingResourceException var3) {
                            return "???" + key + "???";
                        }
                    }
                }

                public int hashCode() {
                    return finalResourceBundle.hashCode();
                }

                public boolean isEmpty() {
                    Enumeration keys = finalResourceBundle.getKeys();
                    return !keys.hasMoreElements();
                }

                public Set keySet() {
                    HashSet keySet = new HashSet();
                    Enumeration keys = finalResourceBundle.getKeys();

                    while (keys.hasMoreElements()) {
                        keySet.add(keys.nextElement());
                    }

                    return keySet;
                }

                public Object put(Object k, Object v) {
                    throw new UnsupportedOperationException();
                }

                public void putAll(Map t) {
                    throw new UnsupportedOperationException();
                }

                public Object remove(Object k) {
                    throw new UnsupportedOperationException();
                }

                public int size() {
                    int result = 0;

                    for (Enumeration keys = finalResourceBundle.getKeys(); keys.hasMoreElements(); ++result) {
                        keys.nextElement();
                    }

                    return result;
                }

                public Collection values() {
                    ArrayList result = new ArrayList();
                    Enumeration keys = finalResourceBundle.getKeys();

                    while (keys.hasMoreElements()) {
                        result.add(finalResourceBundle.getObject((String)keys.nextElement()));
                    }

                    return result;
                }
            };
        }

        if (null == this.resourceBundleMap) {
            this.resourceBundleMap = Collections.EMPTY_MAP;
        }

        return this.resourceBundleMap;
    }

    private ResourceBundle readResourceBundle(Resource bundle) {
        ResourceBundle resourceBundle = null;
        InputStream propertiesInputStream = null;

        try {
            propertiesInputStream = bundle.getInputStream();
            resourceBundle = new PropertyResourceBundle(propertiesInputStream);
        } catch (IOException var17) {
            Logger.getLogger(UIComponent.class.getName()).log(Level.SEVERE, (String)null, var17);
        } finally {
            if (null != propertiesInputStream) {
                try {
                    propertiesInputStream.close();
                } catch (IOException var19) {
                    // NOP
                }
            }
        }
        return resourceBundle;
    }

    private Resource findComponentResourceBundleLocaleMatch(FacesContext context, String resourceName, String libraryName, Locale currentLocale) {
        Resource result = null;
        PropertyResourceBundle resourceBundle = null;
        int i;
        if(-1 != (i = resourceName.lastIndexOf("."))) {
            String localeSuffix = "";
            if (null != currentLocale) {
                localeSuffix = currentLocale.toLanguageTag();
                localeSuffix = localeSuffix.contains("-") ? "_" + localeSuffix.substring(0, localeSuffix.indexOf("-")) : localeSuffix;
            }
            resourceName = resourceName.substring(0, i) + localeSuffix + propertiesExt;
            if (null != context) {
                result = context.getApplication().getResourceHandler().createResource(resourceName, libraryName);
                if (null == result) {
                    resourceName = resourceName.substring(0, i) + propertiesExt;
                    result = context.getApplication().getResourceHandler().createResource(resourceName, libraryName);
                }
                resourceBundle = (PropertyResourceBundle) readResourceBundle(result);
            }
        }
        result = null != resourceBundle ? result : null;
        return result;
    }
}
