import { Posts } from '/imports/api/posts.js'
import './posts_list.html'
import '/imports/ui/pages/posts/post_item.js'

Template.postsList.onCreated(() =>
  Meteor.subscribe('posts.find')
)

Template.postsList.helpers({
  posts: () => Posts.find({})
})
