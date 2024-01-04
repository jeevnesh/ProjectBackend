require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "jeevnesh",
    "id": 70370506,
    "node_id": "MDQ6VXNlcjcwMzcwNTA2",
    "avatar_url": "https://avatars.githubusercontent.com/u/70370506?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeevnesh",
    "html_url": "https://github.com/jeevnesh",
    "followers_url": "https://api.github.com/users/jeevnesh/followers",
    "following_url": "https://api.github.com/users/jeevnesh/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeevnesh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeevnesh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeevnesh/subscriptions",
    "organizations_url": "https://api.github.com/users/jeevnesh/orgs",
    "repos_url": "https://api.github.com/users/jeevnesh/repos",
    "events_url": "https://api.github.com/users/jeevnesh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeevnesh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "jeevnesh nandwana",
    "company": "SAP Fioneer",
    "blog": "",
    "location": "Bangalore",
    "email": null,
    "hireable": null,
    "bio": "I'm a passionate programmer and an information security enthusiast who loves to develop efficient and robust software. ",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2020-08-28T08:55:13Z",
    "updated_at": "2024-01-04T17:15:33Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('jeevneshdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send("<h2>Chai aur code</h2>")
})

app.get('/github',(req,res) => {
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
