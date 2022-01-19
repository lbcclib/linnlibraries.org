# frozen_string_literal: true

require 'capybara'
require 'capybara/dsl'
require 'capybara/session'
require 'rack/jekyll'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    # Prevents you from mocking or stubbing a method that does not exist on
    # a real object. This is generally recommended, and will default to
    # `true` in RSpec 4.
    mocks.verify_partial_doubles = true
  end

  # This option will default to `:apply_to_host_groups` in RSpec 4 (and will
  # have no way to turn it off -- the option exists only for backwards
  # compatibility in RSpec 3). It causes shared context metadata to be
  # inherited by the metadata hash of host groups and examples, rather than
  # triggering implicit auto-inclusion in groups with matching metadata.
  config.shared_context_metadata_behavior = :apply_to_host_groups

  config.include Capybara::DSL

  Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, browser: :firefox)
  end

  config.before :suite do
    # Configure Capybara to load the website through rack-jekyll.
    # (force_build: true) builds the site before the tests are run,
    # so our tests are always running against the latest version
    # of our jekyll site.
    Capybara.app = Rack::Jekyll.new(force_build: true)

    # Sleep a while to let the site build. Tell the user what you're doing.
    @wait_for_jekyll = 15
    puts "\nWaiting #{@wait_for_jekyll} seconds for the site to build.\n\n"
    @wait_for_jekyll.times { sleep 1 }

    # Run HTMLProofer
    # require 'html-proofer'
    # puts "\nRunning HTML Proofer....\n"
    # HTMLProofer.check_directory("./_site", allow_hash_href: true).run
  end

  config.default_formatter = 'doc'
end
