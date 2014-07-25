//node libs

var express = require('express');
var fs      = require('fs');
var http = require("http");


//openshift/local info
var connection_string = '127.0.0.1:27017/tumblr';
// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
}


//tumblr depends
var tumblr = require('./lib/tumblr');
tumblr.request(require('request'));

module.exports = tumblr;



var client = tumblr.createClient({
  consumer_key: 'SqFu4wiBMiyfl6v40GBfCOEDEOECxtIn3A1q5z2sirVnqpifZ8',
  consumer_secret: 'I8QizfU4HxDLujUBifDxLicvCn48S3zvn5tf2ewMuTQ8S7CLux',
  token: 'iudo13ly6v7puDysKqpc50fUiU0hJ9MYZULOsYUabN1A3gxnAz',
  token_secret: 'Q71jROnuApeAaaabzQC6yWfCwxaur3XhMDrjkJCQEur9QWd8l8'
});


//db stuff
var db;
var db1;

var MongoClient = require('mongodb').MongoClient;
 MongoClient.connect('mongodb://'+connection_string, function(err, db) {
    dbv=db;
     //console.log(dbv)
    })
var MongoClient1 = require('mongodb').MongoClient;
 MongoClient1.connect('mongodb://'+connection_string, function(err, db) {
    dbv1=db;
    })


 //start server




function getUserInfo(){

	client.userInfo(function (err, data) {
    data.user.blogs.forEach(function (blog) {
        console.log(blog.name);
    });
});
}

function findPopularContent(keyword){

	//searches tumblr for the keyword
	//for all post, it finds the user who posted it

}


function saveUser(userInfoArr){


}

function getFollowers(theUser){


}

function followUser(userId){


}

function reblogAndSave(postId){


}

function likeAndSave(postId){


}











var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */

      /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
  


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {



self.app.listen(self.port, self.ipaddress, function() {
           // console.log("static at"+ __dirname+"/news");
            
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });

 
        //  Start the app on the specific interface (and port).
     // self.app.use(express.static(__dirname+"/public"));
      
    };


    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
            var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");
        };

        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );

        };

      
          

    self.routes['/api/scheduleTumblr']= function(req, res){


        var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();

rule.minute = new schedule.Range(0, 59, 20);


var k = schedule.scheduleJob(rule, function(){
    console.log('starting timer');
    
   
    dbv.close();
  MongoClient.connect('mongodb://'+connection_string, function(err, db) {

  
    dbv=db;
     //console.log(dbv)
    })
  setTimeout(function(){

     //do something
  }, 4000);


});
  res.send('scheduled');
    };

   



   

};  
  self.initializeServer = function() {

        theApp = self;
        self.createRoutes();
        console.log(express)
        self.app = express.createServer()
        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };

 /*  Sample Application.  */
}

var zapp = new SampleApp();
zapp.initialize();
zapp.start();