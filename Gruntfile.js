module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	var config = grunt.file.readJSON(grunt.option('config') || 'config.json');

  	grunt.registerTask('generateIndex',function(){
		grunt.file.copy('Index.html',config.buildFolder+'/Index.html',
			{
				process: function(files){
					return grunt.template.process(files,
					{
						data: {
							pageTitle: config.appName
						}
					}
						);
				}
			}
			);
		});

  	grunt.registerTask('generatePage1',function(){
		grunt.file.copy('page1.html',config.buildFolder+'/'+config.pageOneName+'.html',
			{
				process: function(files){
					return grunt.template.process(files,
					{
						data: {
							pageTitle: config.appName
						}
					}
						);
				}
			}
			);
		});

  	 	grunt.registerTask('generatePage2',function(){
		grunt.file.copy('page2.html',config.buildFolder+'/'+config.pageTwoName+'.html',
			{
				process: function(files){
					return grunt.template.process(files,
					{
						data: {
							pageTitle: config.appName
						}
					}
						);
				}
			}
			);
		});

  	grunt.registerTask('build', 
		['generateIndex', 'generatePage1', 'generatePage2']);

};