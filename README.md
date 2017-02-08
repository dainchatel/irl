#C + Me
##A Full-Stack dating web application 

[Sign Up Here](https://whispering-river-97765.herokuapp.com/)

![An image of the application](http://i.imgur.com/4v5FsfL.png)

####Technologies

To make this application, we used Express.js on Node.js, Materialize, 
Moment.js, Sequelize, Passport, and Sass.

Take a look: 

``` 
router.get('/:id',  authHelpers.getProfiles, (req, res, next)=> {
console.log('WHAT IS PROFILES =======   ' + JSON.stringify(res.locals.profiles))
console.log('WHAT IS REQ.USER.DATAVALUES =======   ' + JSON.stringify(req.user.dataValues))

models.Preferences.findOne({
  where: { user_id: req.user.dataValues.id }
}).then((user) => {
  models.User.findAll({
    order: [
    ['age', 'ASC'],
  ],
  where: {
  age: {$between: [user.age_min, user.age_max] },
  gender: {$eq: user.gender}
  }
  })
   .then(function(users) {
    models.User.findById(users[req.params.id].id).then((user) => {
      res.render('profiles/profile', {
        title: 'users',
        user: user,
        counter: parseInt(req.params.id)
      })
     }) 
    })
  })
}); 
```

####The Approach

We started with a brainstorming session, and knew we wanted to include video, with a focus on being mobile friendly. We met with two General Assembly UX students, who helped us with the user flow and features. We used a trello board for our profject workflow. 

[Wireframe](https://drive.google.com/file/d/0ByyiNgER-zrMSk1ST3NGcXFLZ0k/view?usp=sharing)

In order to avoid merging conflicts, we separated our focus into different areas. We split our time between authentication, the routes, and the messaging features. For the more difficult code challenges, we pair programmed to overcome them.

####Installation
Just run ```npm install``` and you should be good to go. You'll need your own ```SECRET_KEY```, we can't give away ours. 

####For the Future

+ We'd like to have users upload a video directly with our app. It needs to be easier than having to go to youtube, especially on mobile.

+ Sorting matches by location. We wanted to geolocate our users and display them by distance. Currently they are ordered by age.

+ Favoriting system where user cannot be contacted unless both have favorited one another.

#####Made by Chris Wilkening, Dain Chatel, Alex Lebedyev






