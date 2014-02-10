Package.describe({
	summary: "Sidr packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('dist/jquery.sidr.js', 'client');
	api.add_files('dist/stylesheets/jquery.sidr.dark.css', 'client');
});
