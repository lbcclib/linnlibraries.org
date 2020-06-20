# frozen_string_literal: true

describe 'footer', type: :feature, js: true do
  it 'adds a valid github edit link to the home page' do
    visit '/'
    expect(find('#edit-on-gh-link')[:href]).to match('https://github.com/lbcclib/linnlibraries.org/edit/master/index.html')
  end

  it 'adds a valid github edit link to nested pages too' do
    visit '/staff-tools/cataloging/policy.html'
    expect(find('#edit-on-gh-link')[:href]).to match('https://github.com/lbcclib/linnlibraries.org/edit/master/staff-tools/cataloging/policy.html')
  end
end
