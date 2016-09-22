package com.test.javaee.jsf.rss.habrahabr.parser;

import com.test.javaee.jsf.rss.habrahabr.model.Rss;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import java.io.InputStream;

/**
 * Created by DmitriyS on 9/22/2016.
 */
public class RssParserImpl {

    public Rss parse(InputStream stream) throws Exception {
        Rss result = null;
//        OfflineSiteImportValidationEventHandler validationEventCollector = new OfflineSiteImportValidationEventHandler();
        try {
//            SchemaFactory sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
//            Schema schema = sf.newSchema(new ClassPathResource("/offline_site_import_schema.xsd").getFile());

            JAXBContext jaxbContext = JAXBContext.newInstance(Rss.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
//            unmarshaller.setSchema(schema);
//            unmarshaller.setEventHandler(validationEventCollector);
            result = (Rss) unmarshaller.unmarshal(stream);

//            if (validationEventCollector.hasEvents())
//                throw new CronosValidationException();
        } catch (Exception e) {
//            handleUnmarshallerExceptions(validationEventCollector, e);
            int i = 0;
        }

        return result;
    }
}
