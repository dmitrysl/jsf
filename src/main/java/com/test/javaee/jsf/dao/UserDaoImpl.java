package com.test.javaee.jsf.dao;

import com.test.javaee.jsf.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by DmitriyS on 8/31/2016.
 */
@Repository
public class UserDaoImpl implements UserDao {

    private static final Logger logger = LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public boolean isEmailAndPasswordValid(String email, String password) {
        return this.sessionFactory.getCurrentSession().createQuery("select 1 from User u where u.email = :email and u.password = :pass")
                .setParameter("email", email)
                .setParameter("pass", password)
                .uniqueResult() != null;
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> getUsers() {
        Session session = getSession();
        List<User> users = session.createQuery("from User").list();
        return users;
    }

    private Session getSession() {
        return this.sessionFactory.getCurrentSession();
    }

    @Override
    public User getUserById(int id) {
        Session session = getSession();
        User user = session.createQuery("select u from User u where u.id = :id", User.class)
                .setParameter("id", id)
                .uniqueResult();
        return user;
    }

    @Override
    public User getUserByEmailAndPass(String email, String pass) {
        Session session = getSession();
        User user = session.createQuery("select u from User u where u.email = :email and u.password = :pass", User.class)
                .setParameter("email", email)
                .setParameter("pass", pass)
                .uniqueResult();
        return user;
    }

    @Override
    public void addUser(User user) {
        Session session = getSession();
        session.save(user);
        session.flush();
    }

    @Override
    public void removeUser(int id) {

    }

    @Override
    public User getUserByEmail(String email) {
        return getSession().createQuery("select u from User u where u.email = :email", User.class)
                .setParameter("email", email)
                .uniqueResult();
    }
}
