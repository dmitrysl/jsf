package com.test.javaee.jsf.dao;

import com.test.javaee.jsf.model.User;

import java.util.List;

/**
 * Created by DmitriyS on 8/31/2016.
 */
public interface UserDao {
    boolean isEmailAndPasswordValid(String email, String password);
    List<User> getUsers();
    User getUserById(int id);
    User getUserByEmailAndPass(String email, String pass);
    void addUser(User user);
    void removeUser(int id);

    User getUserByEmail(String email);

    boolean isEmailFree(String email);
}
