package com.test.javaee.jsf.controller;

import com.test.javaee.jsf.model.Role;
import com.test.javaee.jsf.model.User;
import com.test.javaee.jsf.service.UserService;
import com.test.javaee.jsf.util.SessionUtils;
import io.reactivex.Observable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.faces.event.ComponentSystemEvent;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.math.BigDecimal;

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
    private BigDecimal total;
    private int score;
    private User loggedInUser;

    @Autowired
    private UserService userService;

    @PostConstruct
    public void init() {
        total = BigDecimal.valueOf(12345.45);
        score = 0;
        if (userService != null) return;
        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        ServletContext servletContext = (ServletContext) externalContext.getContext();
        WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext)
                .getAutowireCapableBeanFactory()
                .autowireBean(this);
    }

    @PreDestroy
    public void shutdown() {

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

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public User getLoggedInUser() {
        return loggedInUser;
    }

    public void setLoggedInUser(User loggedInUser) {
        this.loggedInUser = loggedInUser;
    }

    public String validateUsernamePassword() {
        if (user == null || user.trim().isEmpty() || pwd == null || pwd.trim().isEmpty()) return null;
        user = user.trim();
        pwd = pwd.trim();
        boolean valid = userService.isEmailAndPasswordValid(user, pwd);
        if (valid) {
            Observable.just("Hello, world!")
                    .map(s -> s.hashCode())
                    .subscribe(i -> System.out.println(Integer.toString(i)));
            HttpSession session = SessionUtils.getSession();
            loggedInUser = userService.getUserByEmail(user);
            session.setAttribute("user", loggedInUser);
            this.user = loggedInUser.getFullName();
            return "welcome";
        } else {
            FacesContext.getCurrentInstance().addMessage(
                    null,
                    new FacesMessage(FacesMessage.SEVERITY_WARN,
                            "Incorrect Username and Password",
                            "Please enter correct username and Password"));
            return null; // "login"
        }
    }

    //logout event, invalidate session
    public String logout() {
        HttpSession session = SessionUtils.getSession();
        session.invalidate();
        return "login";
    }
}
