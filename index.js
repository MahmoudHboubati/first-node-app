const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongo db'));

const courseShema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

async function updateCourse(id) {
    const result = await Course.update({
        _id: id
    }, {
        $set: {
            author: "Mahmoud",
            isPublished: false
        }
    });

    if (!course) return;

    course.isPublished = true;
    course.author = "Another Author";

    const result = await course.save();
    console.log(result);
}

// updateCourse('');

async function removeCourse(id) {
    const result = await Course.deleteOne({
        _id: id
    });
    console.log(result);
}
// removeCourse('');

async function removeCourses(id) {
    // const result = await Course.deleteMany({_id: id});
    const course = Course.findByIdAndRemove(id);
    console.log(course);
}
// removeCourses('')