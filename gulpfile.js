const fs = require('fs')
const tasks = []
const folders = fs.readdirSync('tasks')

folders.forEach((folder) => {
  const files = fs.readdirSync('tasks/' + folder)
  files.forEach((file) => {
    tasks.push(folder + '/' + file)
  })
})

tasks.forEach((task) => {
  require(`./tasks/${task}`)
})
