package com.test.javaee.jsf.rss.habrahabr.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by DmitriyS on 9/22/2016.
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "rss")
public class Rss {

    @XmlElement(name = "channel", type = Channel.class)
    private List<Channel> channels;

    public List<Channel> getChannels() {
        return channels;
    }

    public void setChannels(List<Channel> channels) {
        this.channels = channels;
    }
}
