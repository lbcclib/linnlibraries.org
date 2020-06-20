# frozen_string_literal: true

require 'jasmine'
require 'jasmine_selenium_runner'
load 'jasmine/tasks/jasmine.rake'

require 'rubocop/rake_task'
RuboCop::RakeTask.new

require 'jekyll'

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:rspec)

task default: %i[build rubocop rspec jasmine:ci]

task :build do
  puts 'Building site...'.bold
  Jekyll::Commands::Build.process(profile: true)
end
