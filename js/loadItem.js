const iconFiles = [
  'aarch64-original.svg',
  'aarch64-plain.svg',
  'adonisjs-original-wordmark.svg',
  'adonisjs-original.svg',
  'aftereffects-original.svg',
  'aftereffects-plain.svg',
  'amazonwebservices-original-wordmark.svg',
  'amazonwebservices-original.svg',
  'amazonwebservices-plain-wordmark.svg',
  'anaconda-original-wordmark.svg',
  'anaconda-original.svg',
  'android-original-wordmark.svg',
  'android-original.svg',
  'android-plain-wordmark.svg',
  'android-plain.svg',
  'androidstudio-original-wordmark.svg',
  'androidstudio-original.svg',
  'androidstudio-plain-wordmark.svg',
  'androidstudio-plain.svg',
  'angularjs-original-wordmark.svg',
  'angularjs-original.svg',
  'angularjs-plain-wordmark.svg',
  'angularjs-plain.svg',
  'ansible-original-wordmark.svg',
  'ansible-original.svg',
  'ansible-plain-wordmark.svg',
  'ansible-plain.svg',
  'apache-line-wordmark.svg',
  'apache-line.svg',
  'Apache-New-Logo-Plain.svg',
  'Apache-New-Logo.svg',
  'apache-original-wordmark.svg',
  'apache-original.svg',
  'apache-plain-wordmark.svg',
  'apache-plain.svg',
  'apachekafka-original-wordmark.svg',
  'apachekafka-original.svg',
  'appcelerator-original-wordmark.svg',
  'appcelerator-original.svg',
  'appcelerator-plain-wordmark.svg',
  'apple-original.svg',
  'appwrite-original-wordmark.svg',
  'appwrite-original.svg',
  'appwrite-plain-wordmark.svg',
  'appwrite-plain.svg',
  'arduino-original-wordmark.svg',
  'arduino-original.svg',
  'arduino-plain-wordmark.svg',
  'arduino-plain.svg',
  'argocd-original-wordmark.svg',
  'argocd-original.svg',
  'argocd-plain-wordmark.svg',
  'argocd-plain.svg',
  'ArrangoDB-icon.svg',
  'ArrangoDB-plain.svg',
  'ArrangoDB.svg',
  'atom-original-wordmark.svg',
  'atom-original.svg',
  'azure-original-wordmark.svg',
  'azure-original.svg',
  'azure-plain-wordmark.svg',
  'azure-plain.svg',
  'babel-original.svg',
  'babel-plain.svg',
  'backbonejs-original-wordmark.svg',
  'backbonejs-original.svg',
  'backbonejs-plain-wordmark.svg',
  'backbonejs-plain.svg',
  'bamboo-original-wordmark.svg',
  'bamboo-original.svg',
  'bash-original.svg',
  'bash-plain.svg',
  'behance-original-wordmark.svg',
  'behance-original.svg',
  'behance-plain-wordmark.svg',
  'behance-plain.svg',
  'bitbucket-original-wordmark.svg',
  'bitbucket-original.svg',
  'blender-original-wordmark.svg',
  'blender-original.svg',
  'bootstrap-original-wordmark.svg',
  'bootstrap-original.svg',
  'bootstrap-plain-wordmark.svg',
  'bootstrap-plain.svg',
  'bower-line-wordmark.svg',
  'bower-line.svg',
  'bower-original-wordmark.svg',
  'bower-original.svg',
  'bower-plain-wordmark.svg',
  'bower-plain.svg',
  'bulma-plain.svg',
  'c-line.svg',
  'c-original.svg',
  'c-plain.svg',
  'cakephp-original-wordmark.svg',
  'cakephp-original.svg',
  'cakephp-plain-wordmark.svg',
  'cakephp-plain.svg',
  'canva-original.svg',
  'centos-original-wordmark.svg',
  'centos-original.svg',
  'centos-plain-wordmark.svg',
  'centos-plain.svg',
  'ceylon-original-wordmark.svg',
  'ceylon-original.svg',
  'ceylon-plain-wordmark.svg',
  'ceylon-plain.svg',
  'chrome-original-wordmark.svg',
  'chrome-original.svg',
  'chrome-plain-wordmark.svg',
  'chrome-plain.svg',
  'circleci-plain-wordmark.svg',
  'circleci-plain.svg',
  'clojure-line.svg',
  'clojure-original.svg',
  'clojurescript-original.svg',
  'clojurescript-plain.svg',
  'cmake-original-wordmark.svg',
  'cmake-original.svg',
  'cmake-plain-wordmark.svg',
  'cmake-plain.svg',
  'cockroach-full.svg',
  'cockroach-icon.svg',
  'codecov-plain.svg',
  'codeigniter-plain-wordmark.svg',
  'codeigniter-plain.svg',
  'codepen-original-wordmark.svg',
  'codepen-plain.svg',
  'coffeescript-original-wordmark.svg',
  'coffeescript-original.svg',
  'composer-line-wordmark.svg',
  'composer-line.svg',
  'composer-original.svg',
  'confluence-original-wordmark.svg',
  'confluence-original.svg',
  'couchdb-original-wordmark.svg',
  'couchdb-original.svg',
  'couchdb-plain-wordmark.svg',
  'couchdb-plain.svg',
  'cplusplus-line.svg',
  'cplusplus-original.svg',
  'cplusplus-plain.svg',
  'crystal-original-wordmark.svg',
  'crystal-original.svg',
  'csharp-line.svg',
  'csharp-original.svg',
  'csharp-plain.svg',
  'css3-original-wordmark.svg',
  'css3-original.svg',
  'css3-plain-wordmark.svg',
  'css3-plain.svg',
  'cucumber-plain-wordmark.svg',
  'cucumber-plain.svg',
  'd3js-original.svg',
  'd3js-plain.svg',
  'dart-original-wordmark.svg',
  'dart-original.svg',
  'dart-plain-wordmark.svg',
  'dart-plain.svg',
  'debian-original-wordmark.svg',
  'debian-original.svg',
  'debian-plain-wordmark.svg',
  'debian-plain.svg',
  'denojs-original-wordmark.svg',
  'denojs-original.svg',
  'devicon-line-wordmark.svg',
  'devicon-line.svg',
  'devicon-original-wordmark.svg',
  'devicon-original.svg',
  'devicon-plain-wordmark.svg',
  'devicon-plain.svg',
  'digitalocean-original-wordmark.svg',
  'digitalocean-original.svg',
  'digitalocean-plain-wordmark.svg',
  'digitalocean-plain.svg',
  'discordjs-original-wordmark.svg',
  'discordjs-original.svg',
  'discordjs-plain-wordmark.svg',
  'discordjs-plain.svg',
  'django-plain-wordmark.svg',
  'django-plain.svg',
  'docker-original-wordmark.svg',
  'docker-original.svg',
  'docker-plain-wordmark.svg',
  'docker-plain.svg',
  'doctrine-line-wordmark.svg',
  'doctrine-line.svg',
  'doctrine-original-wordmark.svg',
  'doctrine-original.svg',
  'doctrine-plain-wordmark.svg',
  'doctrine-plain.svg',
  'dot-net-original-wordmark.svg',
  'dot-net-original.svg',
  'dot-net-plain-wordmark.svg',
  'dot-net-plain.svg',
  'dotnetcore-original.svg',
  'dotnetcore-plain.svg',
  'dropwizard-original.svg',
  'dropwizard-plain.svg',
  'drupal-original-wordmark.svg',
  'drupal-original.svg',
  'drupal-plain-wordmark.svg',
  'drupal-plain.svg',
  'elasticco_kibana-icon.svg',
  'elasticco_kibana.svg',
  'elasticsearch.svg',
  'electron-original-wordmark.svg',
  'electron-original.svg',
  'eleventy-original.svg',
  'eleventy-plain.svg',
  'elixir-original-wordmark.svg',
  'elixir-original.svg',
  'elixir-plain-wordmark.svg',
  'elixir-plain.svg',
  'elm-original-wordmark.svg',
  'elm-original.svg',
  'elm-plain-wordmark.svg',
  'elm-plain.svg',
  'embeddedc-original-wordmark.svg',
  'embeddedc-original.svg',
  'embeddedc-plain-wordmark.svg',
  'embeddedc-plain.svg',
  'ember-original-wordmark.svg',
  'erlang-original-wordmark.svg',
  'erlang-original.svg',
  'erlang-plain-wordmark.svg',
  'erlang-plain.svg',
  'eslint-original-wordmark.svg',
  'eslint-original.svg',
  'express-original-wordmark.svg',
  'express-original.svg',
  'facebook-original.svg',
  'facebook-plain.svg',
  'fastapi_full.svg',
  'fastapi_icon.svg',
  'fastapi-original-wordmark.svg',
  'fastapi-original.svg',
  'fastapi-plain-wordmark.svg',
  'fastapi-plain.svg',
  'feathersjs-original.svg',
  'fedora-original.svg',
  'fedora-plain.svg',
  'figma-original.svg',
  'figma-plain.svg',
  'filezilla-plain-wordmark.svg',
  'filezilla-plain.svg',
  'firebase-plain-wordmark.svg',
  'firebase-plain.svg',
  'firefox-original-wordmark.svg',
  'firefox-original.svg',
  'firefox-plain-wordmark.svg',
  'firefox-plain.svg',
  'flask-original-wordmark.svg',
  'flask-original.svg',
  'Fluentd_horizontal.svg',
  'Fluentd_icon.svg',
  'Fluentd_plain.svg',
  'Fluentd_square.svg',
  'flutter-original.svg',
  'flutter-plain.svg',
  'foundation-original-wordmark.svg',
  'foundation-original.svg',
  'foundation-plain-wordmark.svg',
  'foundation-plain.svg',
  'fsharp-original.svg',
  'fsharp-plain.svg',
  'gatling-plain-wordmark.svg',
  'gatling-plain.svg',
  'gatsby-original-wordmark.svg',
  'gatsby-original.svg',
  'gatsby-plain-wordmark.svg',
  'gatsby-plain.svg',
  'gcc-original.svg',
  'gcc-plain.svg',
  'gentoo-plain-wordmark.svg',
  'gentoo-plain.svg',
  'gimp-original-wordmark.svg',
  'gimp-original.svg',
  'gimp-plain-wordmark.svg',
  'gimp-plain.svg',
  'git-original-wordmark.svg',
  'git-original.svg',
  'git-plain-wordmark.svg',
  'git-plain.svg',
  'github-original-wordmark.svg',
  'github-original.svg',
  'gitlab-original-wordmark.svg',
  'gitlab-original.svg',
  'gitlab-plain-wordmark.svg',
  'gitlab-plain.svg',
  'gitter-plain-wordmark.svg',
  'gitter-plain.svg',
  'go-line.svg',
  'go-original-wordmark.svg',
  'go-original.svg',
  'go-plain.svg',
  'godot-original-wordmark.svg',
  'godot-original.svg',
  'godot-plain-wordmark.svg',
  'godot-plain.svg',
  'google-original-wordmark.svg',
  'google-original.svg',
  'google-plain-wordmark.svg',
  'google-plain.svg',
  'googlecloud-original-wordmark.svg',
  'googlecloud-original.svg',
  'googlecloud-plain-wordmark.svg',
  'googlecloud-plain.svg',
  'gradle-plain-wordmark.svg',
  'gradle-plain.svg',
  'grafana-original-wordmark.svg',
  'grafana-original.svg',
  'grails-original.svg',
  'grails-plain.svg',
  'graphql-plain-wordmark.svg',
  'graphql-plain.svg',
  'groovy-original.svg',
  'groovy-plain.svg',
  'grunt-line-wordmark.svg',
  'grunt-line.svg',
  'grunt-original-wordmark.svg',
  'grunt-original.svg',
  'grunt-plain-wordmark.svg',
  'grunt-plain.svg',
  'gulp-plain.svg',
  'handlebars-original-wordmark.svg',
  'handlebars-original.svg',
  'haskell-original-wordmark.svg',
  'haskell-original.svg',
  'haskell-plain-wordmark.svg',
  'haskell-plain.svg',
  'haxe-original.svg',
  'haxe-plain.svg',
  'heroku-original-wordmark.svg',
  'heroku-original.svg',
  'heroku-plain-wordmark.svg',
  'heroku-plain.svg',
  'html5-original-wordmark.svg',
  'html5-original.svg',
  'html5-plain-wordmark.svg',
  'html5-plain.svg',
  'hugo-original-wordmark.svg',
  'hugo-original.svg',
  'hugo-plain-wordmark.svg',
  'hugo-plain.svg',
  'ie10-original.svg',
  'ifttt-original.svg',
  'illustrator-line.svg',
  'illustrator-plain.svg',
  'influxdb_logo.svg',
  'inkscape-original-wordmark.svg',
  'inkscape-original.svg',
  'inkscape-plain-wordmark.svg',
  'inkscape-plain.svg',
  'intellij-original-wordmark.svg',
  'intellij-original.svg',
  'intellij-plain-wordmark.svg',
  'intellij-plain.svg',
  'ionic-original-wordmark.svg',
  'ionic-original.svg',
  'jamstack-original-wordmark.svg',
  'jamstack-original.svg',
  'jamstack-plain-wordmark.svg',
  'jasmine-plain-wordmark.svg',
  'jasmine-plain.svg',
  'java-original-wordmark.svg',
  'java-original.svg',
  'java-plain-wordmark.svg',
  'java-plain.svg',
  'javascript-original.svg',
  'javascript-plain.svg',
  'jeet-original.svg',
  'jeet-plain-wordmark.svg',
  'jeet-plain.svg',
  'jenkins-line.svg',
  'jenkins-original.svg',
  'jenkins-plain.svg',
  'jest-plain.svg',
  'jetbrains-original.svg',
  'jetbrains-plain.svg',
  'jira-original-wordmark.svg',
  'jira-original.svg',
  'jira-plain-wordmark.svg',
  'jira-plain.svg',
  'jquery-original-wordmark.svg',
  'jquery-original.svg',
  'jquery-plain-wordmark.svg',
  'jquery-plain.svg',
  'julia-original-wordmark.svg',
  'julia-original.svg',
  'julia-plain-wordmark.svg',
  'julia-plain.svg',
  'jupyter-original-wordmark.svg',
  'jupyter-original.svg',
  'jupyter-plain-wordmark.svg',
  'jupyter-plain.svg',
  'k3s-original-wordmark.svg',
  'k3s-original.svg',
  'k3s-plain-wordmark.svg',
  'kaggle-original-wordmark.svg',
  'kaggle-original.svg',
  'karma-original.svg',
  'karma-plain.svg',
  'knockout-plain-wordmark.svg',
  'kotlin-original-wordmark.svg',
  'kotlin-original.svg',
  'kotlin-plain-wordmark.svg',
  'kotlin-plain.svg',
  'krakenjs-original-wordmark.svg',
  'krakenjs-original.svg',
  'krakenjs-plain-wordmark.svg',
  'krakenjs-plain.svg',
  'kubernetes-plain-wordmark.svg',
  'kubernetes-plain.svg',
  'labview-original-wordmark.svg',
  'labview-original.svg',
  'labview-plain-wordmark.svg',
  'labview-plain.svg',
  'laravel-plain-wordmark.svg',
  'laravel-plain.svg',
  'latex-original.svg',
  'less-plain-wordmark.svg',
  'linkedin-original-wordmark.svg',
  'linkedin-original.svg',
  'linkedin-plain-wordmark.svg',
  'linkedin-plain.svg',
  'linux-original.svg',
  'linux-plain.svg',
  'lua-original-wordmark.svg',
  'lua-original.svg',
  'lua-plain-wordmark.svg',
  'lua-plain.svg',
  'magento-line.svg',
  'magento-original-wordmark.svg',
  'magento-original.svg',
  'markdown-original.svg',
  'materialui-original.svg',
  'materialui-plain.svg',
  'matlab-line.svg',
  'matlab-original.svg',
  'matlab-plain.svg',
  'maya-original-wordmark.svg',
  'maya-original.svg',
  'maya-plain-wordmark.svg',
  'maya-plain.svg',
  'meteor-original-wordmark.svg',
  'meteor-original.svg',
  'meteor-plain-wordmark.svg',
  'meteor-plain.svg',
  'microsoftsqlserver-plain-wordmark.svg',
  'microsoftsqlserver-plain.svg',
  'minitab-original.svg',
  'minitab-plain.svg',
  'mocha-plain.svg',
  'modx-original-wordmark.svg',
  'modx-original.svg',
  'modx-plain-wordmark.svg',
  'modx-plain.svg',
  'mongodb-original-wordmark.svg',
  'mongodb-original.svg',
  'mongodb-plain-wordmark.svg',
  'mongodb-plain.svg',
  'moodle-original-wordmark.svg',
  'moodle-original.svg',
  'moodle-plain-wordmark.svg',
  'moodle-plain.svg',
  'msdos-line.svg',
  'msdos-original.svg',
  'msdos-plain.svg',
  'mysql-original-wordmark.svg',
  'mysql-original.svg',
  'mysql-plain-wordmark.svg',
  'mysql-plain.svg',
  'nats-horizontal-color 1.svg',
  'nats-horizontal-color-plain.svg',
  'neo4j-original-wordmark.svg',
  'neo4j-original.svg',
  'neo4j-plain-wordmark.svg',
  'neo4j-plain.svg',
  'nestjs-plain-wordmark.svg',
  'nestjs-plain.svg',
  'networkx-original.svg',
  'nextjs-line.svg',
  'nextjs-original-wordmark.svg',
  'nextjs-original.svg',
  'nginx-original.svg',
  'nixos-original-wordmark.svg',
  'nixos-original.svg',
  'nixos-plain-wordmark.svg',
  'nixos-plain.svg',
  'nodejs-original-wordmark.svg',
  'nodejs-original.svg',
  'nodejs-plain-wordmark.svg',
  'nodejs-plain.svg',
  'nodewebkit-line-wordmark.svg',
  'nodewebkit-line.svg',
  'nodewebkit-original-wordmark.svg',
  'nodewebkit-original.svg',
  'nodewebkit-plain-wordmark.svg',
  'nodewebkit-plain.svg',
  'npm-original-wordmark.svg',
  'nuget-original-wordmark.svg',
  'nuget-original.svg',
  'numpy-original-wordmark.svg',
  'numpy-original.svg',
  'nuxtjs-original-wordmark.svg',
  'nuxtjs-original.svg',
  'nuxtjs-plain-wordmark.svg',
  'nuxtjs-plain.svg',
  'objectivec-plain.svg',
  'ocaml-original-wordmark.svg',
  'ocaml-original.svg',
  'ocaml-plain-wordmark.svg',
  'ocaml-plain.svg',
  'openal-original.svg',
  'openal-plain.svg',
  'opencv-original-wordmark.svg',
  'opencv-original.svg',
  'opencv-plain-wordmark.svg',
  'opencv-plain.svg',
  'opengl-original.svg',
  'opengl-plain.svg',
  'opensuse-original-wordmark.svg',
  'opensuse-original.svg',
  'opensuse-plain-wordmark.svg',
  'opensuse-plain.svg',
  'opera-original-wordmark.svg',
  'opera-original.svg',
  'opera-plain-wordmark.svg',
  'opera-plain.svg',
  'oracle-original.svg',
  'packer-original-wordmark.svg',
  'packer-original.svg',
  'pandas-original-wordmark.svg',
  'pandas-original.svg',
  'perl-original.svg',
  'perl-plain.svg',
  'phalcon-original.svg',
  'phalcon-plain.svg',
  'phoenix-original-wordmark.svg',
  'phoenix-original.svg',
  'phoenix-plain-wordmark.svg',
  'phoenix-plain.svg',
  'photoshop-line.svg',
  'photoshop-plain.svg',
  'php-original.svg',
  'php-plain.svg',
  'phpstorm-original-wordmark.svg',
  'phpstorm-original.svg',
  'phpstorm-plain-wordmark.svg',
  'phpstorm-plain.svg',
  'podman-original-wordmark.svg',
  'podman-original.svg',
  'podman-plain-wordmark.svg',
  'podman-plain.svg',
  'polygon-original.svg',
  'polygon-plain.svg',
  'postgresql-original-wordmark.svg',
  'postgresql-original.svg',
  'postgresql-plain-wordmark.svg',
  'postgresql-plain.svg',
  'premierepro-original.svg',
  'premierepro-plain.svg',
  'processing-original-wordmark.svg',
  'processing-original.svg',
  'processing-plain-wordmark.svg',
  'processing-plain.svg',
  'prometheus-original-wordmark.svg',
  'prometheus-original.svg',
  'protractor-plain-wordmark.svg',
  'protractor-plain.svg',
  'putty-original.svg',
  'putty-plain.svg',
  'pycharm-original-wordmark.svg',
  'pycharm-original.svg',
  'pycharm-plain-wordmark.svg',
  'pycharm-plain.svg',
  'pytest-original-wordmark.svg',
  'pytest-original.svg',
  'pytest-plain-wordmark.svg',
  'pytest-plain.svg',
  'python-original-wordmark.svg',
  'python-original.svg',
  'python-plain-wordmark.svg',
  'python-plain.svg',
  'pytorch-original-wordmark.svg',
  'pytorch-original.svg',
  'pytorch-plain-wordmark.svg',
  'qt-original.svg',
  'r-original.svg',
  'r-plain.svg',
  'rails-original-wordmark.svg',
  'rails-plain-wordmark.svg',
  'rails-plain.svg',
  'raspberrypi-line-wordmark.svg',
  'raspberrypi-line.svg',
  'raspberrypi-original-wordmark.svg',
  'raspberrypi-original.svg',
  'react-original-wordmark.svg',
  'react-original.svg',
  'rect-original.svg',
  'rect-plain.svg',
  'redhat-original-wordmark.svg',
  'redhat-original.svg',
  'redhat-plain-wordmark.svg',
  'redhat-plain.svg',
  'redis-original-wordmark.svg',
  'redis-original.svg',
  'redis-plain-wordmark.svg',
  'redis-plain.svg',
  'redux-original.svg',
  'rocksdb-plain.svg',
  'rspec-original-wordmark.svg',
  'rspec-original.svg',
  'rstudio-original.svg',
  'rstudio-plain.svg',
  'ruby-original-wordmark.svg',
  'ruby-original.svg',
  'ruby-plain-wordmark.svg',
  'ruby-plain.svg',
  'rubymine-original-wordmark.svg',
  'rubymine-original.svg',
  'rubymine-plain-wordmark.svg',
  'rubymine-plain.svg',
  'rust-plain.svg',
  'safari-line-wordmark.svg',
  'safari-line.svg',
  'safari-original-wordmark.svg',
  'safari-original.svg',
  'safari-plain-wordmark.svg',
  'safari-plain.svg',
  'salesforce-original.svg',
  'salesforce-plain.svg',
  'sass-original.svg',
  'scala-original-wordmark.svg',
  'scala-original.svg',
  'scala-plain-wordmark.svg',
  'scala-plain.svg',
  'sdl-original.svg',
  'sdl-plain.svg',
  'selenium-original.svg',
  'sequelize-original-wordmark.svg',
  'sequelize-original.svg',
  'sequelize-plain-wordmark.svg',
  'sequelize-plain.svg',
  'shopware-original-wordmark.svg',
  'shopware-original.svg',
  'shotgrid-original-wordmark.svg',
  'shotgrid-original.svg',
  'shotgrid-plain.svg',
  'sketch-line-wordmark.svg',
  'sketch-line.svg',
  'sketch-original-wordmark.svg',
  'sketch-original.svg',
  'slack-original-wordmark.svg',
  'slack-original.svg',
  'slack-plain-wordmark.svg',
  'slack-plain.svg',
  'socketio-original-wordmark.svg',
  'socketio-original.svg',
  'solidity-original.svg',
  'solidity-plain.svg',
  'sourcetree-original-wordmark.svg',
  'sourcetree-original.svg',
  'spring-original-wordmark.svg',
  'spring-original.svg',
  'spring-plain-wordmark.svg',
  'spring-plain.svg',
  'spss-original.svg',
  'spss-plain.svg',
  'sqlalchemy-original-wordmark.svg',
  'sqlalchemy-original.svg',
  'sqlalchemy-plain.svg',
  'sqlite-original-wordmark.svg',
  'sqlite-original.svg',
  'sqlite-plain-wordmark.svg',
  'sqlite-plain.svg',
  'ssh-original-wordmark.svg',
  'ssh-original.svg',
  'storybook-original-wordmark.svg',
  'storybook-original.svg',
  'storybook-plain-wordmark.svg',
  'storybook-plain.svg',
  'stylus-original.svg',
  'subversion-original-wordmark.svg',
  'subversion-original.svg',
  'svelte-original-wordmark.svg',
  'svelte-original.svg',
  'svelte-plain-wordmark.svg',
  'svelte-plain.svg',
  'swift-original-wordmark.svg',
  'swift-original.svg',
  'swift-plain-wordmark.svg',
  'swift-plain.svg',
  'symfony-original-wordmark.svg',
  'symfony-original.svg',
  'tailwindcss-original-wordmark.svg',
  'tailwindcss-plain.svg',
  'tensorflow-line-wordmark.svg',
  'tensorflow-line.svg',
  'tensorflow-original-wordmark.svg',
  'tensorflow-original.svg',
  'terraform-original-wordmark.svg',
  'terraform-original.svg',
  'terraform-plain-wordmark.svg',
  'terraform-plain.svg',
  'thealgorithms-original-wordmark.svg',
  'thealgorithms-original.svg',
  'thealgorithms-plain-wordmark.svg',
  'thealgorithms-plain.svg',
  'threejs-original-wordmark.svg',
  'threejs-original.svg',
  'tomcat-line-wordmark.svg',
  'tomcat-line.svg',
  'tomcat-original-wordmark.svg',
  'tomcat-original.svg',
  'tortoisegit-line.svg',
  'tortoisegit-original.svg',
  'tortoisegit-plain.svg',
  'towergit-original-wordmark.svg',
  'towergit-original.svg',
  'towergit-plain-wordmark.svg',
  'towergit-plain.svg',
  'travis-plain-wordmark.svg',
  'travis-plain.svg',
  'trello-plain-wordmark.svg',
  'trello-plain.svg',
  'twitter-original.svg',
  'typescript-original.svg',
  'typescript-plain.svg',
  'typo3-original-wordmark.svg',
  'typo3-original.svg',
  'typo3-plain-wordmark.svg',
  'typo3-plain.svg',
  'ubuntu-plain-wordmark.svg',
  'ubuntu-plain.svg',
  'unity-original-wordmark.svg',
  'unity-original.svg',
  'unix-original.svg',
  'unrealengine-original-wordmark.svg',
  'unrealengine-original.svg',
  'uwsgi-original.svg',
  'uwsgi-plain.svg',
  'vagrant-original-wordmark.svg',
  'vagrant-original.svg',
  'vagrant-plain-wordmark.svg',
  'vagrant-plain.svg',
  'vim-original.svg',
  'vim-plain.svg',
  'visualstudio-plain-wordmark.svg',
  'visualstudio-plain.svg',
  'vscode-original-wordmark.svg',
  'vscode-original.svg',
  'vscode-plain-wordmark.svg',
  'vscode-plain.svg',
  'vuejs-line-wordmark.svg',
  'vuejs-line.svg',
  'vuejs-original-wordmark.svg',
  'vuejs-original.svg',
  'vuejs-plain-wordmark.svg',
  'vuejs-plain.svg',
  'vuestorefront-original.svg',
  'vuestorefront-plain.svg',
  'vuetify-line.svg',
  'vuetify-original.svg',
  'vuetify-plain.svg',
  'webflow-original.svg',
  'weblate-original-wordmark.svg',
  'weblate-original.svg',
  'weblate-plain-wordmark.svg',
  'weblate-plain.svg',
  'webpack-original-wordmark.svg',
  'webpack-original.svg',
  'webpack-plain-wordmark.svg',
  'webpack-plain.svg',
  'webstorm-original-wordmark.svg',
  'webstorm-original.svg',
  'webstorm-plain-wordmark.svg',
  'webstorm-plain.svg',
  'windows8-original-wordmark.svg',
  'windows8-original.svg',
  'woocommerce-original-wordmark.svg',
  'woocommerce-original.svg',
  'woocommerce-plain-wordmark.svg',
  'woocommerce-plain.svg',
  'wordpress-original.svg',
  'wordpress-plain-wordmark.svg',
  'wordpress-plain.svg',
  'xamarin-original-wordmark.svg',
  'xamarin-original.svg',
  'xcode-original.svg',
  'xcode-plain.svg',
  'xd-line.svg',
  'xd-plain.svg',
  'yarn-original-wordmark.svg',
  'yarn-original.svg',
  'yii-original-wordmark.svg',
  'yii-original.svg',
  'yii-plain-wordmark.svg',
  'yii-plain.svg',
  'yunohost-original.svg',
  'yunohost-plain.svg',
  'zend-plain-wordmark.svg',
  'zend-plain.svg',
  'zig-original-wordmark.svg',
  'zig-original.svg',
  'zig-plain-wordmark.svg'
];
let pastelColor1 = `rgb(255, 237, 233)`;
let pastelColor2 = `rgb(255, 246, 239)`;
let pastelColor3 = `rgb(231, 241, 232)`;

const folderPath = "./Logos/"; 

 // 요소 가져오기
const listContainer = document.getElementById("list-container");
const searchInput = document.getElementById('default-search');
const captureArea = document.getElementById("capture_area");

const img = window.srcImg;
const colorThief = new ColorThief();


const imgContainer = document.getElementById("container-icon");

const bgColorDetail01 = document.getElementById("radio-contaion01");
const bgColorDetail02 = document.getElementById("radio-contaion02");
const bgColorDetail03 = document.getElementById("radio-contaion03");

let imgIcon = './res/empty_icon.svg';
let checkedRadio = document.querySelector('input[name="bgColor-group"]:checked');

document.querySelectorAll('input[name="bgColor-group"]').forEach((radio) => {
  radio.addEventListener("change", () => {
      checkedRadio = document.querySelector('input[name="bgColor-group"]:checked');
      setBgColor()
  });
});

let checkedToolIconRadio = document.querySelector('input[name="toolIcon-group"]:checked');

document.querySelectorAll('input[name="toolIcon-group"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    checkedToolIconRadio = document.querySelector('input[name="toolIcon-group"]:checked');
    setToolIconColor(checkedToolIconRadio.id)
  });
});

// 두 색상 간의 유클리드 거리 계산 함수
function colorDistance(color1, color2) {
  const rDiff = color1[0] - color2[0];
  const gDiff = color1[1] - color2[1];
  const bDiff = color1[2] - color2[2];
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

// 색상 배열에서 유사한 색상 제거하는 함수
function removeSimilarColors(palette, threshold = 10) {
  let uniqueColors = [];
  
  for (let i = 0; i < palette.length; i++) {
      let isUnique = true;
      for (let j = 0; j < uniqueColors.length; j++) {
          if (colorDistance(palette[i], uniqueColors[j]) < threshold) {
              isUnique = false;
              break;
          }
      }
      if (isUnique) {
          uniqueColors.push(palette[i]);
      }
  }
  
  return uniqueColors;
}

// RGB 값을 파스텔 색상으로 변환하는 함수
function rgbToPastel(r, g, b, lightenFactor = 0.5, desaturateFactor = 0.4) {  
  // 1. RGB 값을 밝게 변환
  r = Math.round(r + (255 - r) * lightenFactor);
  g = Math.round(g + (255 - g) * lightenFactor);
  b = Math.round(b + (255 - b) * lightenFactor);
  
  // 2. 채도 감소
  r = Math.round(r + (255 - r) * desaturateFactor);
  g = Math.round(g + (255 - g) * desaturateFactor);
  b = Math.round(b + (255 - b) * desaturateFactor);
  
  // 3. RGB 값이 255를 넘지 않도록 제한
  r = Math.min(255, r);
  g = Math.min(255, g);
  b = Math.min(255, b);

  // 최종 RGB 색상 반환
  return `rgb(${r}, ${g}, ${b})`;
}


// 검색어가 바뀔 때마다 실행
searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase();
  
  // 배열에서 검색어와 일치하는 항목 필터링
  const filteredFiles = iconFiles.filter(file => file.toLowerCase().includes(query));
  renderIcons(filteredFiles)
});





// 색상을 약간 변형하는 함수
function generateSimilarColor(color, value) {
  // 함수 매개변수로 주어서 약간씩 다르게 지정
  color[0] = Math.min(Math.floor((color[0] + value + 255) / 2), 255);
  color[1] = Math.min(Math.floor((color[1] + value + 255) / 2), 255);
  color[2] = Math.min(Math.floor((color[2] + value + 255) / 2), 255);
  return color;
}

function searchIcons() {
  // 기존 listContainer를 분리
  // 검색한 아이템을 listContainer에서 필터링한 새 리스트
  // 필터링한 새 리스트를 전시
}


function renderIcons(list) {
  listContainer.innerHTML = "";
  list.forEach(icon => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = folderPath + icon;
      img.alt = icon.replace(".svg", ""); // 파일명에서 확장자 제거하여 대체 텍스트 설정
      li.appendChild(img);

      li.addEventListener('click',(e) => {
        console.log("아이콘 바뀜");
        // 버튼 리셋
        document.getElementById("toolIconType1").checked = true;
        document.querySelectorAll(".colorDetail-btn").forEach(radio => {
          radio.checked = false;
      });
        // 그레디언트도 기본값으로 변경해야함
        document.getElementById("bgColor1").checked = true;
        checkedRadio = document.querySelector('input[name="bgColor-group"]:checked');
        captureArea.style.background = "white";

        if (imgContainer.tagName === "IMG") {
          // 1. 컨테이너 리소스를 img로 변경
          imgContainer.src = img.src;
          imgIcon = img.src;
          const dominantColor = colorThief.getColor(img);
          
          // 2. img에서 색상 추출 - 4개 
          const palette = colorThief.getPalette(img, 4);

          // 3. 동일 색상 제거
          const result = removeSimilarColors(palette);

          // 4. 유사 색상 추가
          while (result.length < 4) {
            let color = [...result[0]]; // 배열을 복사합니다 -?
            let pp =  generateSimilarColor(color,result.length*15);
            result.push(pp);
          }

          // 4. 추출한 4개 색상을 모두 파스텔 컬러로 변경하는 메서드 동작
          pastelColor1 = rgbToPastel(result[0][0],result[0][1],result[0][2]);
          pastelColor2 = rgbToPastel(result[1][0],result[1][1],result[1][2]);
          pastelColor3 = rgbToPastel(result[2][0],result[2][1],result[2][2]);
          // 5. 추출한 색상을 radio-container에 적용
          setBgColor()
        } else {
          console.log("icon is not IMG");
          console.error("imgContainer가 <img> 태그가 아닙니다.");
        }
      });
      listContainer.appendChild(li);
  });
}
renderIcons(iconFiles);

function setBgColor(){
  console.log("변경변경");
  if(checkedRadio.id == "bgColor1"){
    // <클릭시> -  단색
    bgColorDetail01.style.background = pastelColor1;
    bgColorDetail02.style.background = pastelColor2;
    bgColorDetail03.style.background = pastelColor3;
  }else{
    // <클릭시> -  그라데이션
    bgColorDetail01.style.background = `linear-gradient(45deg, ${pastelColor1}, ${pastelColor2})`;
    bgColorDetail02.style.background = `linear-gradient(45deg, ${pastelColor1}, ${pastelColor3})`;
    bgColorDetail03.style.background = `linear-gradient(45deg, ${pastelColor2}, ${pastelColor3})`;
  }
}

function setToolIconColor(id){
  if(id == "toolIconType1"){
    //기본값
    imgContainer.src = imgIcon;
  }else if(id == "toolIconType2"){
    //흰색
    replaceImgSrcWithColoredSvg(imgContainer,"white");
  }else{
    //검은색
    replaceImgSrcWithColoredSvg(imgContainer,"black");
  }
}

function replaceImgSrcWithColoredSvg(imgElement, color) {
  fetch(imgElement.src)
      .then(response => response.text())
      .then(svgText => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, "image/svg+xml").documentElement;

          // 색상 변경
          svgDoc.querySelectorAll("*").forEach(el => {
              if (el.getAttribute("fill") && el.getAttribute("fill") !== "none") {
                  el.setAttribute("fill", color);
              }
          });

          // XML 문자열로 변환
          const serializer = new XMLSerializer();
          const updatedSvgText = serializer.serializeToString(svgDoc);

          // Data URL 생성 후 img 태그의 src 변경
          const svgBlob = new Blob([updatedSvgText], { type: "image/svg+xml" });
          const svgUrl = URL.createObjectURL(svgBlob);

          imgElement.src = svgUrl;

      })
      .catch(console.error);
}


const container = document.querySelector('.scroll-container');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => isDown = false);
container.addEventListener('mouseup', () => isDown = false);

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    container.scrollLeft = scrollLeft - walk;
});

//radio-container의 버튼 아이템 클릭시 frame 색상을 구성한 그라데이션으로 변경
bgColorDetail01.addEventListener('click',(e) => {
  console.log(`${bgColorDetail01.style.background}`);
  captureArea.style.background = `${bgColorDetail01.style.background}`;
});
bgColorDetail02.addEventListener('click',(e) => {
  captureArea.style.background = `${bgColorDetail02.style.background}`;
});
bgColorDetail03.addEventListener('click',(e) => {
  captureArea.style.background = `${bgColorDetail03.style.background}`;
});