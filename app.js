var express  = require('express')
	, cors = require('cors')
	, app = express();
var connect = require('connect');
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var port     = process.env.PORT || 10000;

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(logger());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', router);
require('./routes/routes.js')(router);

app.listen(port);

console.log('The App runs on port ' + port);

