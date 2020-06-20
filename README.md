# linnlibraries.org

## Running automated tests

The following will run jekyll, rspec, jasmine, and rubocop:

    bundle install
    bundle exec rake


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

