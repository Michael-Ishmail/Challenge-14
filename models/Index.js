const user = require('./User')
const post = require('./Post')
const comment = require('./Comment')

user.hasMany(Post, {
    foreignKey: 'user_id'
})

user.hasMany(Comment, {
    foreignKey: 'user_id'
})

post.belongsTo(User, {
    foreignKey: 'user_id'
})

post.hasMany(Comment, {
    foreignKey: 'post_id'
})

comment.belongsTo(User, {
    foreignKey: 'user_id'
})

comment.belongsTo(Post, {
    foreignKey: 'post_id'
})


module.exports = {
    User,
    Post,
    Comment
};