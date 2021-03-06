Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]

    resource :session, only: [:create, :destroy, :show]

    resources :music_videos, only: [:index] do
      collection do
        patch :increment_view_count
        get :related_videos
      end
    end

    get "music_videos/:mv_url", to: 'music_videos#mv_show'

    resources :playlists, only: [:index, :show, :create, :update, :destroy]

    post "playlists/:id/add_mv", to: 'playlists#add_mv'
    delete "playlists/:id/remove_mv", to: 'playlists#remove_mv'

    resources :search, only: [:index]
  end

  root "static_pages#root"
end
