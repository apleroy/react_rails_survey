ActiveAdmin.register Question do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :survey_id, :number, :text, :choice_1_image, :choice_2_image, :choice_3_image, :choice_4_image
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if resource.something?
#   permitted
# end

  form do |f|
    f.inputs "Question" do
      f.input :survey_id
      f.input :number
      f.input :text
      f.input :choice_1_image, :as => :file#, :hint => f.template.image_tag(f.object.thumbnail.url(:thumb))
      f.input :choice_2_image, :as => :file#, :hint => f.template.image_tag(f.object.thumbnail.url(:thumb))
      f.input :choice_3_image, :as => :file#, :hint => f.template.image_tag(f.object.thumbnail.url(:thumb))
      f.input :choice_4_image, :as => :file#, :hint => f.template.image_tag(f.object.thumbnail.url(:thumb))
      # Will preview the image when the object is edited
    end
    f.actions
  end


end
