# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  User.destroy_all
  Video.destroy_all
  Comment.destroy_all
  
  User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
  demo_user1 = User.create(username: "BrianCho", email: "briancho@gmail.com", password: "123123")
  user2 = User.create(username: "Jason", email: "jason@gmail.com", password: "123123")
  user3 = User.create(username: "Andrew", email: "andrew@gmail.com", password: "123123")
  user4 = User.create(username: "ESPN", email: "espn@gmail.com", password: "123123")
  user5 = User.create(username: "Mary", email: "mary@gmail.com", password: "123123")
  user6 = User.create(username: "bobaguy", email: "boba4lyfe@gmail.com", password: "123123")
  user7 = User.create(username: "Jennie", email: "jennie@gmail.com", password: "123123")
  user8 = User.create(username: "Tzuyu", email: "tzuyu@gmail.com", password: "123123")
  user9 = User.create(username: "Jim Barnett", email: "warriors@gmail.com", password: "123123")
  user10 = User.create(username: "koolguy123", email: "socool@gmail.com", password: "123123")

  Video.connection.execute('ALTER SEQUENCE videos_id_seq RESTART WITH 1')
  video1 = Video.create(title: 'How to make a thumbnail', description: 'This if the first video!!', test_url: "https://i.ytimg.com/vi/qnfEBjnX8GM/maxresdefault.jpg", views: 2, user_id: user3.id)
  video2 = Video.create(title: 'Football!', description: 'This if the second video!!', test_url: "https://i.ytimg.com/vi/KQ6-suVy9B0/maxresdefault.jpg", views: 4000, user_id: user4.id)
  video3 = Video.create(title: 'Lets go warriors!', description: 'This if the third video!!', test_url: "https://i.ytimg.com/vi/vy2JfDmspII/maxresdefault.jpg", views: 8000, user_id: user9.id)
  video4 = Video.create(title: 'Yummy steak', description: 'This if the fourth video!!', test_url: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/07/Cooking_Ribeye_Steaks_Example.jpg", views: 312, user_id: user10.id)
  video5 = Video.create(title: 'Making milk tea', description: 'This if the fifth video!!', test_url: "https://i.ytimg.com/vi/HE4F7Pt3j1A/maxresdefault.jpg", views: 92000, user_id: user5.id)
  video6 = Video.create(title: 'Twice~', description: 'This if the 6th video!!', test_url: "https://i.ytimg.com/vi/3n9rDwpa6QA/maxresdefault.jpg", views: 40000000, user_id: user8.id)
  video7 = Video.create(title: 'Blackpink in your area', description: 'This if the 7 video!!', test_url: "https://ichef.bbci.co.uk/news/660/cpsprodpb/1602A/production/_106345109_5f83eed6-6c2b-495d-ade4-d102ef78803b.jpg", views: 900000, user_id: user7.id)
  video8 = Video.create(title: 'Totalled. Rip. Goodbye.', description: 'This if the 8 video!!', test_url: "https://i.ytimg.com/vi/K6VUTSjBe6s/maxresdefault.jpg", views: 321, user_id: user1.id)
  video9 = Video.create(title: 'Boba is life', description: 'This if the 9 video!!', test_url: "https://i.ytimg.com/vi/-bXCv-BF9I4/maxresdefault.jpg", views: 623, user_id: user6.id)
  video10 = Video.create(title: 'Tenderize the steak', description: 'This if the 10 video!!', test_url: "https://i.ytimg.com/vi/eWExOPF0bp4/maxresdefault.jpg", views: 4, user_id: user2.id)

  Comment.connection.execute('ALTER SEQUENCE comments_id_seq RESTART WITH 1')
  comment1 = Comment.create(body: "This is my first comment. Hopefully it works!", user_id: user1.id, video_id: video1.id)
  
end