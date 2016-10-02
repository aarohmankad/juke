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
After running the `nodemon` command in both folders, the browser will open the configuration page for you. Follow the commands to configure Juke for your stream.

You must configure Juke before each stream and keep it running during your stream. Be sure to close the command line when your stream is finished or you want to stop Juke.
