const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
    name: 'Claudio Lins',
    avatar: 'https://avatars.githubusercontent.com/u/69011104?v=4',
    "monthly-budget": 1500,
    "hours-per-day": 10,
    "days-per-week": 5,
    "vacation-per-year": 4,

}

routes.get('/', (req, res) => res.render(views + 'index'))
routes.get('/job', (req, res) => res.render(views + 'job'))
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', {profile}))

module.exports = routes