# linnlibraries.org

## Setting up a dev environment

Install ruby, then:

    gem install bundler
    git clone https://github.com/lbcclib/linnlibraries.org
    cd linnlibraries.org
    bundle
    bundle exec jekyll serve # This will serve the site at localhost:4000

## Running automated tests

Before running, make sure that gecko webdriver is installed and on your path.
The following will run jekyll, rspec, jasmine, rubocop, and the link checker:

    bundle exec rake

You can list the individual checks with `bundle exec rake -T`.

## Updating dependencies

As part of the build process, the latest version of beautiful jekyll theme
will be fetched, so no need to update it yourself.

Start by updating your dev environment on the ruby side.  This command won't
make much difference to end users, but it will update your dev environment to
match Github's deployments, as well as updating other development tools.

    bundle update

Then, try updating the JS dependencies in `spec/javascripts/support/jasmine.yml`.
Run the test suite and try building the site.  If everything looks good, update
the JS dependencies in the front matter in the HTML files.

jQuery, Bootstrap, and popper are all pinned to specific versions in the
beautiful jekyll theme.  When the theme updates its dependencies, those will
arrive next time you build the site.

