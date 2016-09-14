Build [![Build Status](https://travis-ci.org/dmitrysl/jsf.svg?branch=master)](https://travis-ci.org/dmitrysl/jsf)

 
 
# Glassfish server tips
```bash
    $ asadmin.bat --port [admin_port] undeploy [app]
```


# MySQL db configuration
create new schema jsf_test


# Build project
```bash
    $ mvn clean initialize package
```


# Flyway commands
```bash
    $ mvn clean initialize flyway:init
    $ mvn clean initialize flyway:migrate
    $ mvn clean initialize flyway:clean
```
