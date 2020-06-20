# frozen_string_literal: true

require 'jasmine'
require 'jasmine_selenium_runner'
load 'jasmine/tasks/jasmine.rake'

require 'rubocop/rake_task'
RuboCop::RakeTask.new

require 'jekyll'

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:rspec)

task default: %i[build rubocop rspec jasmine:ci check_links]

desc 'Build the site in the _site directory'
task :build do
  puts 'Building site...'.bold
  Jekyll::Commands::Build.process(profile: true)
end

desc 'Check all external links'
task :check_links do
  require 'link_checker'
  LinkChecker.new(
    target: '_site',
    options: { no_warnings: true }
  ).check_uris
end
