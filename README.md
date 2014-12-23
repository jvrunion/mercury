Mercury
===============================

Mercury is a front end asset pipeline which uses SASS, Compass, Jekyll, Ruby, NPM, Bower, Grunt, jQuery, CSS3 Transitions, and HTML5.  Pre built for rapid prototyping and mobile first design it takes the .  

Responsive out of the box and scalable, it is a lighting fast UX/UI assembly that coverts into a deployable front end package that is easily integrated with any back end.

#Install Dependencies

- [Node](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Jekyll](http://jekyllrb.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Compass](http://compass-style.org/)

##If you already have Ruby

``gem install jekyll``

``gem install jekyll-compass``

``gem install rdsicount``

###Clone this repo:

``git clone https://github.com/jvrunion/mercury.git``

``cd mercury``

###NPM Install:

``npm install``

###Start Jekyll with Grunt:

``grunt``

###You are now up and running!:

``=> Now point to http://localhost:4000``

Mercury is mainly built on the Jekyll platform and integrates easily into a Git versioning workflow.  If you are comfortable with Git as well as NPM, Bower and SASS this project can be a boiler that you will fall in love with.

##Require any additional compass plugins here.

``config/compass.rb``

###Options:

Add Bower:

``add_import_path "bower_components"``

Add Google Fonts:

``add_import_path "http://fonts.googleapis.com/css?"``

###Set this to the root of your project when deployed:

Application Path:
``http_path = "/"``

CSS Deployed Directory:
``css_dir = "/css"``

SASS Deployed Directory:
``sass_dir = "/_sass"``

IMAGES Deployed:
``images_dir = "img"``

**JS Deployed:**
``javascripts_dir = "js"``

###Based upon the following open source projects:

- [Pure](http://purecss.io/base/)
- [Jekyll](http://jekyllrb.com/docs/home/)
- [Grunt](http://gruntjs.com/getting-started)
- [Compass](http://compass-style.org/reference/compass/)
- [Jekyll Grunt](https://github.com/dannygarcia/grunt-jekyll)
- [Jekyll Pure](https://github.com/brickgao/jekyll-pure)
