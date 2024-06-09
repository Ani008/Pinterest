var express = require('express');
var router = express.Router();

// const searchRouter = require('./search'); // Import the search router



const userModel = require('./users');
const postModel = require('./posts');
const passport = require('passport');
const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads/' });



const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/feed', function(req, res, next) {
  res.render('feed');
});

router.post('/upload', isLoggedIn, upload.single('file'), async function(req, res, next) {
  if(!req.file){
    return res.status(404).send("no file found");
  }
  const user = await userModel.findOne({username: req.session.passport.user});
  const postdata = await postModel.create({
    image: req.file.filename,
    postText: req.body.filecaption,
    user: user._id 
  });

  user.posts.push(postdata._id);
  await user.save();
  res.redirect("/profile");
});


















router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })

  .populate("posts")
  res.render("profile", {user});

    const userId = req.user.id;

});

router.post("/register", function(req, res){
const { username, email, fullname } = req.body;
const userData = new userModel({ username, email, fullname });

userModel.register(userData, req.body.password)
.then(function(){
  passport.authenticate("local")(req, res, function(){
    res.redirect("/feed");
  })
})
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true
}), function(req, res){
});

router.post("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}



router.get('/search', async function(req, res) {
  const searchTerm = req.query.q; // Get the search term from the query parameters

  try {
    // Search for users with matching usernames or fullnames
    const users = await userModel.find({
      $or: [
        { username: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive regex
        { fullname: { $regex: searchTerm, $options: 'i' } },
      ],
    });

    // Search for posts with matching postText
    const posts = await postModel.find({ postText: { $regex: searchTerm, $options: 'i' } });

    res.render('search', { users, posts, searchTerm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




router.get('/open', (req, res) => {
    // Retrieve the clicked image source from the cookie
    const clickedImageSrc = req.cookies.clickedImageSrc || '/default-image.jpg';

    res.render('open.ejs', { clickedImageSrc });
});





module.exports = router;
