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
  brian = User.create(username: "Brian Cho", email: "briancho@gmail.com", password: "123123")
  jason = User.create(username: "Jason", email: "jason@gmail.com", password: "123123")
  andrew = User.create(username: "Andrew", email: "andrew@gmail.com", password: "123123")
  espn = User.create(username: "ESPN", email: "espn@gmail.com", password: "123123")
  mary = User.create(username: "Mary", email: "mary@gmail.com", password: "123123")
  bobaguy = User.create(username: "bobaguy", email: "boba4lyfe@gmail.com", password: "123123")
  jennie = User.create(username: "Jennie", email: "jennie@gmail.com", password: "123123")
  tzuyu = User.create(username: "Tzuyu", email: "tzuyu@gmail.com", password: "123123")
  jim = User.create(username: "Jim Barnett", email: "warriors@gmail.com", password: "123123")
  koolguy123 = User.create(username: "koolguy123", email: "socool@gmail.com", password: "123123")

  chris_brown = User.create(username: "Chris Brown", email: "cb@gmail.com", password: "123123")
  post = User.create(username: "Post Malone", email: "drake@gmail.com", password: "123123")
  steak = User.create(username: "Steak", email: "steak@gmail.com", password: "123123")
  buzz = User.create(username: "Buzz Feed", email: "buzzfeed@gmail.com", password: "123123")

  Video.connection.execute('ALTER SEQUENCE videos_id_seq RESTART WITH 1')
  video2 = Video.create(title: 'Redskins vs. Eagles Week 1 Highlights | NFL 2019', description: 'The Washington Redskins take on the Philadelphia Eagles during Week 1 of the 2019 NFL season.', test_url: "noqSAKL-GSo", views: 4000, user_id: espn.id)
  video3 = Video.create(title: "Golden State Warriors NBA Season Preview: Stephen Curry | Klay Thompson | D'Angelo Russell [2019-20]", description: "Golden State Warriors NBA Season Preview: Stephen Curry | Klay Thompson | D'Angelo Russell [2019-20]", test_url: "E0POFTJ7fCs", views: 8000, user_id: jim.id)
  video4 = Video.create(title: "1 Single DRY-AGED Steak CHALLENGE | Guga Foods", description: "Is it possible to dry-age only 1 steak? Normally we dry-age a whole loin but never one steak. After many people requested this experiment today I deliver it with 3 different methods. I was shocked by this experiment and it is something you can try at home easily. ", test_url: "35O_99rY9GI", views: 312, user_id: jason.id)
  video5 = Video.create(title: 'HOW TO MAKE BUBBLE TEA! Boba Milk Tea DIY', description: "This is how I make easy bubble/boba tea at home! I show you how to make matcha green tea, taro, strawberry, and Thai milk tea drinks with fresh boba!", test_url: "Op8K8O5_mIk", views: 92000, user_id: mary.id)
  video6 = Video.create(title: "TWICE 'Dance The Night Away' M/V", description: "TWICE(트와이스) 'Dance The Night Away' M/V", test_url: "Fm5iP0S1z9w", views: 40000000, user_id: tzuyu.id)
  video7 = Video.create(title: "BLACKPINK - 'Kill This Love' M/V", description: "BLACKPINK - 'Kill This Love'", test_url: "2S24-y0Ij3Y", views: 900000, user_id: jennie.id)
  video8 = Video.create(title: "BMW M3 HEAD TO HEAD REVIEW! F80 Vs E92 - Is The V8 Still King?", description: "Go to https://dollarshaveclub.com/vv to get your first starter set for $5. Thank you Dollar Shave Club for sponsoring this video.", test_url: "u9Xs0GQrJtE", views: 321, user_id: brian.id)
  video9 = Video.create(title: "Bobalife (MUSIC VIDEO) - Fung Brothers ft. Kevin Lien, Priska, Aileen Xu | Fung Bros", description: "BUY BOBALIFE T SHIRT", test_url: "zccNQPH7Xe0", views: 623, user_id: bobaguy.id)
  video10 = Video.create(title: "How to Grill $199 Steak - Japanese Miyazaki Wagyu A5", description: "Today's cook is Japanese Miyazaki Wagyu A5 kobe beef on kamado joe's soap stone! With this beautiful steak I wanted my family to experience this amazing cut of beef.  The soap stone seemed to be a good option for this cook today. ", test_url: "dKXWejK3E0M", views: 4, user_id: brian.id)

  pizza = Video.create(title: 'Worst Reviewed Vs. Best Reviewed Pizza', description: 'Eric and Ade decided to taste test the worst and best reviewed pizza while they were in Las Vegas', test_url: "0hcDB5_cUxw", views: 14, user_id: buzz.id)
  people = Video.create(title: 'Try Not To Eat Challenge - Studio Ghibli Foods | People Vs. Food', description: 'Watch all People Vs Food Eps', test_url: "4JFHu3w35xA", views: 442, user_id: buzz.id)
  asmr = Video.create(title: "MOST POPULAR FOOD FOR ASMR PART3 *HONEYCOMB, ALOE VERA, POPPING BOBA, TANGHULU*NO TALKING 먹방", description: "HI! I prepared MOST POPLAR FOOD for 100K subscribers!", test_url: "WQYwr45g4Fc", views: 4, user_id: mary.id)
  boba = Video.create(title: "No Music] How to make Bubble Tea", description: "Making boba", test_url: "xebewT6lh2k", views: 431, user_id: tzuyu.id)
  mkbg = Video.create(title: "AMERICAN vs KOREAN FRIED CHICKEN with BLOVESLIFE MUKBANG!", description: "AMERICAN vs KOREAN FRIED CHICKEN with BLOVESLIFE MUKBANG! ", test_url: "B1LXnWUBj_s", views: 134, user_id: jason.id)
  kp = Video.create(title: "The World’s Most Aggressive Telemarketer - Key & Peele", description: "A telemarketer uses an unusual new technique to sell vacation packages.", test_url: "3znzIslrQXg", views: 1334, user_id: brian.id)
  tm = Video.create(title: "Future Ft. Drake - Tony Montana | NEW - 2011", description: "Future Ft. Drake - Tony Montan", test_url: "2Kacc7ZiF5I", views: 1342, user_id: andrew.id)
  
  
  # video10 = Video.create(title: "", description: "", test_url: "", views: 134, user_id: user2.id)

  Comment.connection.execute('ALTER SEQUENCE comments_id_seq RESTART WITH 1')
  comment1 = Comment.create(body: "This is my first comment. Hopefully it works!", user_id: brian.id, video_id: video3.id)
  comment2 = Comment.create(body: "This is my first nested comment. Hopefully it works!", user_id: brian.id, video_id: video3.id, parent_comment_id: comment1.id)
  
end