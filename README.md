Mercury
===============================

**(Quicksilver Coding)**

Mercury is a front end asset framework which uses SASS, Compass, Jekyll, Ruby, NPM, Bower, Grunt, jQuery, CSS3 Transitions, and HTML5. 

Pre built for rapid prototyping and mobile first design it takes the pain and frustration out of starting out a project for blazing deployments.  

Responsive out of the box and scalable, it's lighting fast UI (based on yahoo's PURE.io framework) converts static assets into a deployable front end package that is easily integrated with any back end.

If you are interested in the future of the web and want to contribute feel free to fork away!

#Install Dependencies

- [Node](http://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Jekyll](http://jekyllrb.com/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Compass](http://compass-style.org/)

##Install Gems

``gem install jekyll``

``gem install jekyll-compass``

``compass init``

``gem install rdsicount``

###Clone Repo

``git clone https://github.com/jvrunion/mercury.git``

``cd mercury``

###NPM Install

``npm install``

###Start with Grunt:

``grunt``

###You are now up and running!:

``=> Now point to http://localhost:4000``

Mercury is mainly built on the Jekyll platform and integrates easily into a Git versioning workflow.  It uses PURE from yahoo instead of Bootstrap because it's much smaller footprint makes it light and easy to work with.

If you are comfortable with Git as well as NPM, Bower and SASS this project can be a boiler-plate that you will fall in love with.

##Basic Jekyll Structure:

<pre>
<code class="language-bash" data-lang="bash">
├── _config.yml
├── _drafts
<span class="p">|</span>   ├── begin-with-the-crazy-ideas.textile
<span class="p">|</span>   └── on-simplicity-in-technology.markdown
├── _includes
<span class="p">|</span>   ├── footer.html
<span class="p">|</span>   └── header.html
├── _layouts
<span class="p">|</span>   ├── default.html
<span class="p">|</span>   └── post.html
├── _posts
<span class="p">|</span>   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
<span class="p">|</span>   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
<span class="p">|</span>   └── members.yml
├── _site
└── index.html</code>
</pre>

##Require any additional compass plugins here.

``config/compass.rb``

###Options:

Add Bower:

``add_import_path "bower_components"``

Add Google Fonts:

``add_import_path "http://fonts.googleapis.com/css?"``

###Set this to the root of your project when deployed:

- Application Path:

``http_path = "/"``

- CSS Deployed:

``css_dir = "/css"``

- SASS Deployed:

``sass_dir = "/_sass"``

- IMAGES Deployed: 

``images_dir = "img"``

- JS Deployed:

``javascripts_dir = "js"``

###Based upon the following open source projects:

- [Pure](http://purecss.io/base/)
- [Jekyll](http://jekyllrb.com/docs/home/)
- [Grunt](http://gruntjs.com/getting-started)
- [Compass](http://compass-style.org/reference/compass/)
- [Jekyll Grunt](https://github.com/dannygarcia/grunt-jekyll)
- [Jekyll Pure](https://github.com/brickgao/jekyll-pure)
