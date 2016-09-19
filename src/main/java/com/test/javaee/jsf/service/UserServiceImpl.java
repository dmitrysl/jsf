package com.test.javaee.jsf.service;

import com.test.javaee.jsf.dao.UserDao;
import com.test.javaee.jsf.model.User;
import com.test.javaee.jsf.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import java.io.Serializable;
import java.util.List;

/**
 * Created by DmitriyS on 8/31/2016.
 */
@Service("userService")
@ManagedBean(name="userService")
@SessionScoped
public class UserServiceImpl implements UserService, Serializable {

    private static final long serialVersionUID = 3805636087011836986L;

    @Autowired
    private UserDao userDao;

    @PostConstruct
    public void init() {
        if (userDao != null) return;
        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        ServletContext servletContext = (ServletContext) externalContext.getContext();
        WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext)
                .getAutowireCapableBeanFactory()
                .autowireBean(this);
    }

    @Transactional
    @Override
    public boolean isEmailFree(String email) {
        return userDao.isEmailFree(email);
    }

    @Transactional
    @Override
    public boolean isEmailAndPasswordValid(String email, String password) {
        return userDao.isEmailAndPasswordValid(email, SecurityUtils.md5(password));
    }

    @Transactional
    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Transactional
    @Override
    public void addUser(User user) {
        user.setPassword(SecurityUtils.md5(user.getPassword()));
        userDao.addUser(user);
    }

    @Transactional
    @Override
    public User getUserByEmail(String email) {
        return userDao.getUserByEmail(email);
    }
}
