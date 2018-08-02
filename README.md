# react-posts-app

# Setup

Checkout this repo, install dependencies, then start with the following:

```
> git clone https://github.com/seletonurb/react-posts-app
> cd react-posts-app
> npm install
> npm start
```

# Posts API

Service created that can be used to create a post
```
http://reduxblog.herokuapp.com/api/posts?key=<anyKeyYouWant>
```
Payload (POST method):
```json
{
  "title" : " This is a sample Post",
  "categories" : "IT",
  "content" : "This is an IT Post Content"
}
```
