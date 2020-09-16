**Release Note**

**Technology Used**

- Spring Boot
- Angular
- MySQL

**Prerequisite**

- Java v1.8
- Gradle v6.3
- Node v13.11
- MySQL v8.0
- angular cli v9.1.1

**New Feature**

- User can update quantity of product by clicking add to cart button again which will increase quantity of that product in cart
- Admin can update order status and user can track order status.

**Fixes**

- Registered user can view a user present message while again attempt to register.
- Some other fixes

**SETUP**

- **Database Configuration**

1. Open MySQL
2. Create new database &quot;salesdb&quot;create database salesdb;
3. Use salesdb databaseuse salesdb;
4. Find the database file named &quot;salesdb.sql&quot; and import to database.
5. Admin email -[admin@admin.com](mailto:admin@admin.com)

Password - admin123

- **Project Configuration**

1. Open &quot;application.properties&quot; present in &quot;Spring Boot\src\main\resources&quot; .
2. Edit datasource url, username, password according to your database.

- **PROCESS-1**

1. Open given &quot;Spring Boot&quot; folder and open cmd/terminal in that directory.
2. Run command &quot;gradle bootRun&quot;.
3. Verify server started successfully by going to &quot;http://localhost:8080&quot;.
4. Open mysql and Insert admin data manually (If not imported from salesdb.sql) to the db using role field as &#39;admin&#39;. Password must have more than 6 character upto 10 character.
5. like-> INSERT INTO `salesdb`.`user` (`email`, `first_name`, `last_name`, `password`, `role`) VALUES (&#39;admin@admin.com&#39;, &#39;Admin&#39;, &#39;Admin&#39;, &#39;admin123&#39;, &#39;admin&#39;);
6. So admin email-admin@admin.com

pass- admin123

1. Then move to given &quot;Angular&quot; folder and open another cmd/terminal in that directory.
2. Run command &quot;npm install&quot; to install all the dependencies.
3. Then start angular server by running this command &quot;ng serve&quot;.
4. After successfully started go to [http://localhost:4200](http://localhost:4200/) in your browser.
5. Project started successfully.

- **PROCESS-2**

1. Open &quot;Angular&quot; folder then open cmd in that directory and run command &quot;npm install&quot; to install all the dependencies.
2. Then run command &quot;ng build&quot;
3. Copy all the files from &quot;dist&quot; folder (or you can find it in provided zip) and add it to given &quot;Spring Boot\src\main\resources\static&quot; folder
4. Now open cmd in &quot;Spring Boot&quot; directory then run command &quot;gradle bootRun&quot;.
5. Goto [http://localhost:8080](http://localhost:8080/) .
6. Open mysql and Insert admin data manually (If not imported from salesdb.sql) to the db using role field as &#39;admin&#39;. Password must have more than 6 character upto 10 character.
7. like-> INSERT INTO `salesdb`.`user` (`email`, `first_name`, `last_name`, `password`, `role`) VALUES (&#39;admin@admin.com&#39;, &#39;Admin&#39;, &#39;Admin&#39;, &#39;admin123&#39;, &#39;admin&#39;);
8. So admin email-admin@admin.com

pass- admin123

1. Project Started successfully.
2. You can also use command &quot;gradle build &quot; and run the jar file from &quot;build\libs&quot;
