const fs = require("fs")
const chalk = require("chalk")

const getNotes = function () {
  return "Here is your notes..."
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter( function(note) {
    return note.title === title // return array of object with same title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })

    saveNotes(notes)
    console.log(chalk.bgGreen.white.bold("NOTE ADDED!"))
  } else {
    console.log(chalk.bgRed.white.bold("TITLE HAS BEEN USED!"))
  }
}

const removeNote = function (title) {
  const notes = loadNotes()
  const noteToKeep = notes.filter( function(note) {
    return note.title !== title // return array of object with same title
  })

  if (notes.length > noteToKeep.length){
    saveNotes(noteToKeep)
    console.log(chalk.bgGreen.white.bold("TITLE HAS BEEN REMOVED!"))
  } else {
    console.log(chalk.bgRed.white.bold("TITLE DOESN'T EXIST!"))
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
