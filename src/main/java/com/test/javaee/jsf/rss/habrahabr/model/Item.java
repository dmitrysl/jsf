package com.test.javaee.jsf.rss.habrahabr.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import java.util.List;

/**
 * Created by DmitriyS on 9/22/2016.
 */
@XmlAccessorType(XmlAccessType.FIELD)
public class Item {

    @XmlElement(name = "title")
    private String title;

    @XmlElement(name = "guid")
    private String guid;

    @XmlElement(name = "link")
    private String link;

    @XmlElement(name = "description")
    private String description;

    @XmlElement(name = "pubDate")
    private String pubDate;

    @XmlElement(name = "dc:creator")
    private String creator;

    @XmlElement(name = "category")
    private List<String> cateegories;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGuid() {
        return guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPubDate() {
        return pubDate;
    }

    public void setPubDate(String pubDate) {
        this.pubDate = pubDate;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public List<String> getCateegories() {
        return cateegories;
    }

    public void setCateegories(List<String> cateegories) {
        this.cateegories = cateegories;
    }
}
