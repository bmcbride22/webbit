json.extract! post, :id, :title, :body, :url, :media, :user_id, :created_at, :updated_at
json.url post_url(post, format: :json)
json.media url_for(post.media)
