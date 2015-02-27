var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality
  var random = Math.random();
  
  if( random > 0.5 ){
	  res.render("index", projects);
  }
  else{
  	res.render("index_alternate", projects);
  }
};