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

//    public void setSessionFactory(SessionFactory sf){
//        this.sessionFactory = sf;
//    }

    @SuppressWarnings("unchecked")
    @Override
    public List<User> getUsers() {
        Session session = this.sessionFactory.getCurrentSession();
        List<User> users = session.createQuery("from User").list();
        return users;
    }

    @Override
    public User getUserById(int id) {
        Session session = this.sessionFactory.getCurrentSession();
        User user = session.createQuery("select u from User u where u.id = :id", User.class)
                .setParameter("id", id)
                .uniqueResult();
        return user;
    }

    @Override
    public User getUserByEmailAndPass(String email, String pass) {
        Session session = this.sessionFactory.getCurrentSession();
        User user = session.createQuery("select u from User u where u.email = :email and u.password = :pass", User.class)
                .setParameter("email", email)
                .setParameter("pass", pass)
                .uniqueResult();
        return user;
    }

    @Override
    public void addUser(User user) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(user);
    }

    @Override
    public void removeUser(int id) {

    }
}
