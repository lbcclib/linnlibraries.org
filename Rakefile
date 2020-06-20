# frozen_string_literal: true

require 'jasmine'
require 'jasmine_selenium_runner'
load 'jasmine/tasks/jasmine.rake'

require 'rubocop/rake_task'
RuboCop::RakeTask.new

require 'jekyll'

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:rspec)

require 'html-proofer'

task default: %i[build rubocop rspec jasmine:ci]

desc 'Build the site in the _site directory'
task :build do
  puts 'Building site...'.bold
  Jekyll::Commands::Build.process(profile: true)
end

desc 'Check generated html'
task :check_html do
  options = {
    assume_extension: true,
    typhoeus: {
      ssl_verifypeer: false,
      ssl_verifyhost: 0
    }
  }
  HTMLProofer.check_directory('./_site', options).run
end
