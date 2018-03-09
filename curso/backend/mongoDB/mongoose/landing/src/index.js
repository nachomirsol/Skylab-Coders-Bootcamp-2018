const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

 const kitty = new Cat({ name: 'Pupsy' });
 kitty.save()
      .then(() => console.log('meow4'));

Cat.find({name:'Pinchito'}, (err,data) => {
    console.log(data)
})