namespace :db do
  task populate: :environment do

    Survey.destroy_all


  end
end