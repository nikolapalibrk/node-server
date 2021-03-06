const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   res.render('about.hbs', {
      pageTitle: 'About page',
      date: new Date()
   })
})


app.listen(port, () => {
   console.log('Server is up at port ' + port);
});