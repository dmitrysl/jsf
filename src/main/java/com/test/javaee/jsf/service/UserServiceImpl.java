package com.test.javaee.jsf.service;

import com.test.javaee.jsf.dao.UserDao;
import com.test.javaee.jsf.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.util.List;

/**
 * Created by DmitriyS on 8/31/2016.
 */
@Service("userService")
@ManagedBean(name="userService", eager = true)
@SessionScoped
public class UserServiceImpl implements UserService, Serializable {

    private static final long serialVersionUID = 3805636087011836986L;

    @Autowired
    private UserDao userDao;

    @Transactional
    @Override
    public List<User> getUsers() {
        return userDao.getUsers();
    }

    @Transactional
    @Override
    public void addUser(User user) {
        userDao.addUser(user);
    }
}
