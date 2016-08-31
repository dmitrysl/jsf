package com.test.javaee.jsf.service;

import com.test.javaee.jsf.model.User;

import java.util.List;

/**
 * Created by DmitriyS on 8/31/2016.
 */
public interface UserService {
    List<User> getUsers();
    void addUser(User user);
}
