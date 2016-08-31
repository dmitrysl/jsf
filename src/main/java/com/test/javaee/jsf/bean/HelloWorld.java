package com.test.javaee.jsf.bean;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import java.io.Serializable;

/**
 * Created by DmitriyS on 8/30/2016.
 */
//@ViewScoped
@SessionScoped
@ManagedBean(name = "helloWorld")
public class HelloWorld implements Serializable {

    private static final long serialVersionUID = -478861701181079657L;

    private boolean isSelected = false;

    @ManagedProperty(value="#{helper}")
    private HelperBean helperBean;

    public HelloWorld() {
        System.out.println("Started.");
    }

    public void setHelperBean(HelperBean helperBean) {
        this.helperBean = helperBean;
    }

    public void setIsSelected(boolean isSelected) {
        this.isSelected = isSelected;
    }

    public boolean getIsSelected() {
        return isSelected;
    }

    public void updateIsSelected() {
        this.isSelected = !this.isSelected;
    }

    public String getMessage() {
        return "Hello World!!!!";
    }

    public String getMessageFromHelper() {
        return helperBean.getHelperMessage();
    }
}
