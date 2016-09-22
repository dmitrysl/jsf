package com.test.javaee.jsf.rss.habrahabr.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

/**
 * Created by DmitriyS on 9/22/2016.
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class Image {

    @XmlElement(name = "link")
    private String link;

    @XmlElement(name = "url")
    private String url;

    @XmlElement(name = "title")
    private String title;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
