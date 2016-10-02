# Juke

Twitch plays Spotify.

Local use:

Make the sure the necessary dependencies are installed.  In the server and client folders, there are package.json files that specify what is needed. Run:

```
$ npm install
```

in the server and client folders.

I also recommend installing the module `nodemon`. It will watch your server and client files for any changes and restart the server servers accordingly. You should install it like this:

```
$ sudo npm install -g nodemon
```

If you do not have access to `sudo`, running your command prompt as an administrator will have an equal affect.

After all the installations, run the server.js file in both the server and client folders with

```
$ nodemon server.js
```

In a browser, connect to localhost:9000 to begin using the app.