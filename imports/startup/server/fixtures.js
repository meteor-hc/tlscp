import { Posts } from '/imports/api/posts.js'

if (Posts.find().count() === 0) {
  const posts = [
    {
      title: 'Introducing Telescope',
      url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
      title: 'Meteor',
      url: 'http://meteor.com'
    },
    {
      title: 'The Meteor Book',
      url: 'http://themeteorbook.com'
    },
  ]
  posts.map(post => Posts.insert(post))
}
