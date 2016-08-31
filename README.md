# Glassfish server tips
asadmin.bat --port [admin_port] undeploy [app]


# MySQL db configuration
create new schema jsf_test


# Build project
$ mvn clea initialize package


# Flyway commands
$ mvn clean initialize flyway:init
$ mvn clean initialize flyway:migrate
$ mvn clean initialize flyway:clean