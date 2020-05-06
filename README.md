Laravel server(server folder)
## Installation

1. After entering folder , Run ```composer install``` on your cmd or terminal

2. Copy .env.example file to .env on the root folder.

You can type ``copy .env.example .env`` if using command prompt Windows or ``cp .env.example .env`` if using terminal, Ubuntu

3. Open your .env file and change the database name (DB_DATABASE) to whatever you have, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration. 

By default, the username is root and you can leave the password field empty. (This is for Xampp) 

By default, the username is root and password is also root. (This is for Lamp)

4. Run these on terminal
```
php artisan key:generate
php artisan migrate
php artisan serve
```
5. Open browser and go to `http://localhost:8000`

NextJS web app(app folder)
## Building and deploying

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.