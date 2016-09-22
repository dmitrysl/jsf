package com.test.javaee.jsf.rss.habrahabr.reader;

import com.test.javaee.jsf.rss.habrahabr.model.Rss;
import com.test.javaee.jsf.rss.habrahabr.parser.RssParserImpl;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by DmitriyS on 9/22/2016.
 */
public class RssReaderImpl {

    private URL url;

    public RssReaderImpl(String feedUrl) {
        try {
            url = new URL(feedUrl);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    public Rss read() {
        Rss result = null;
        try {
            InputStream is = readStream();
            RssParserImpl parser = new RssParserImpl();
            result = parser.parse(is);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private InputStream readStream() throws IOException {
        try {
            return url.openStream();
        } catch (IOException ex) {
            throw ex;
        }
    }
}
