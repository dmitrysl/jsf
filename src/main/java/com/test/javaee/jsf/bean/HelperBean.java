package com.test.javaee.jsf.bean;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import java.io.Serializable;

/**
 * Created by DmitriyS on 8/30/2016.
 */
@SessionScoped
@ManagedBean(name = "helper")
public class HelperBean implements Serializable {
    private static final long serialVersionUID = -8872906000082599577L;

    public HelperBean() {
        System.out.println("helper started");
    }

    @PostConstruct
    public void init() {
        System.out.println("post construct");
    }

    public String getHelperMessage() {
        return "helper message";
    }
}
