task :update_survey_slugs => :environment do
  Survey.find_each(&:save)
end