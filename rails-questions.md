# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails new app_name -d postgresql -T

2. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

you would just create a migration file to insert the new colum and after we wouyld add the column with add_column:tables, :column_name, :data_type and then migrate it.

3. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails generate model Person shirt:string pants:string shoes:string

4. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The naming convention is Pascal case singular(only one) and the the naming convention for tables are lower case plural(many)

5. A Rails application is going to have two models. One is called Library and one is called Book. A library will have many books and a book will belong to a library. Which model would contain the foreign key? What would the foreign key column be named?

The model that would have the foreign key would be the book model and the column would be called library_id

6. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

the schema is the file that holds all the tables with the keys that where created. Never update it directly if not it will cause problem going down the road with the information stored.
