Rails.application.routes.draw do
  get '/herbs' => 'herb#index', as: 'all_herbs'
  get '/herbs/new' => 'herb#new', as: 'new_herb'
  post '/herbs' => 'herb#create'
  get '/herbs/:id' => 'herb#show', as: 'one_herb'
end
