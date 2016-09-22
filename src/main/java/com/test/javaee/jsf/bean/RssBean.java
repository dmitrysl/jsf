package com.test.javaee.jsf.bean;

import com.test.javaee.jsf.rss.habrahabr.model.Rss;
import com.test.javaee.jsf.rss.habrahabr.reader.RssReaderImpl;

import javax.annotation.PostConstruct;
import javax.faces.bean.ViewScoped;
import javax.inject.Named;

/**
 * Created by DmitriyS on 9/22/2016.
 */
@Named()
@ViewScoped
public class RssBean {
    private Rss rss;

    @PostConstruct
    public void init() {
        int i = 0;
    }

    public Rss getRss() {
        return rss;
    }

    public void setRss(Rss rss) {
        this.rss = rss;
    }

    public void onPageLoad() {
        rss = new RssReaderImpl("https://habrahabr.ru/rss/feed/posts/61213286bb64f49fc79b566c7559119f").read();
    }
}
