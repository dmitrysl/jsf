package com.test.javaee.jsf.config;

import org.ocpsoft.rewrite.annotation.RewriteConfiguration;
import org.ocpsoft.rewrite.config.Configuration;
import org.ocpsoft.rewrite.config.ConfigurationBuilder;
import org.ocpsoft.rewrite.servlet.config.HttpConfigurationProvider;
import org.ocpsoft.rewrite.servlet.config.rule.Join;
import org.ocpsoft.rewrite.servlet.config.rule.TrailingSlash;

import javax.servlet.ServletContext;

/**
 * Created by DmitriyS on 8/30/2016.
 */
@RewriteConfiguration
public class ExampleConfigProvider extends HttpConfigurationProvider {

    @Override
    public Configuration getConfiguration(ServletContext context) {
        return ConfigurationBuilder.begin()
//                .addRule(TrailingSlash.remove())
                .addRule(Join.path("/").to("/index.xhtml").withInboundCorrection())
                .addRule(Join.path("/auth/login").to("/pages/login.xhtml").withInboundCorrection())
                .addRule(Join.path("/admin").to("/pages/admin/admin.xhtml").withInboundCorrection())
                .addRule(Join.path("/example/list").to("/pages/example/list.xhtml").withInboundCorrection())
                .addRule(Join.path("/example/id/{id}").to("/pages/example/details.xhtml").withInboundCorrection()).where("id").matches("[0-9]+")
                ;
    }

    @Override
    public int priority() {
        return 10;
    }
}
