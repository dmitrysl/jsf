package com.test.javaee.jsf.controller;

import com.test.javaee.jsf.model.User;
import com.test.javaee.jsf.service.UserService;
import com.test.javaee.jsf.util.SessionUtils;
import io.reactivex.Observable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;

/**
 * Created by DmitriyS on 9/1/2016.
 */
@ManagedBean
@SessionScoped
public class Login implements Serializable {
    private static final long serialVersionUID = -6411469710135808739L;

    private String pwd;
    private String msg;
    private String user;

    @Autowired
    private UserService userService;

    @PostConstruct
    public void init() {
        if (userService != null) return;
        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        ServletContext servletContext = (ServletContext) externalContext.getContext();
        WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext)
                .getAutowireCapableBeanFactory()
                .autowireBean(this);
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String validateUsernamePassword() {
        boolean valid = userService.isEmailAndPasswordValid(user, pwd);
        if (valid) {
            Observable.just("Hello, world!")
                    .map(s -> s.hashCode())
                    .subscribe(i -> System.out.println(Integer.toString(i)));
            HttpSession session = SessionUtils.getSession();
            User usr = userService.getUserByEmail(user);
            session.setAttribute("user", usr);
            this.user = usr.getFullName();
            return "welcome";
        } else {
            FacesContext.getCurrentInstance().addMessage(
                    null,
                    new FacesMessage(FacesMessage.SEVERITY_WARN,
                            "Incorrect Username and Password",
                            "Please enter correct username and Password"));
            return "login";
        }
    }

    //logout event, invalidate session
    public String logout() {
        HttpSession session = SessionUtils.getSession();
        session.invalidate();
        return "login";
    }
}
