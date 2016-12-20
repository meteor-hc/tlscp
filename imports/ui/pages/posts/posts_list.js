import { Posts } from '/imports/api/posts.js'
import './posts_list.html'
import '/imports/ui/pages/posts/post_item.js'

const data = [
  {title: 'Meteor', url: 'http://meteor.com'},
  {title: 'blaze', url: 'http://blaze.com'},
]

Template.postsList.helpers({
  posts: () => data
})
