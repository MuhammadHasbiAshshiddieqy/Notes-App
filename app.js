const yargs = require("yargs")
const notes = require("./notes.js")

yargs.command({
    command:'add',
    describe:'add new note',
    builder: {
      title: {
        describe: 'note title',
        demandOption: true, //Set title as required
        type: 'string'
      },
      body: {
        describe: 'note body',
        demandOption: true, //Set body as required
        type: 'string'
      }
    },
    handler: function (argv) {
      notes.addNote(argv.title, argv.body)
    }
  })

  yargs.command({
      command:'remove',
      describe:'remove note',
      builder: {
        title: {
          describe: 'note title',
          demandOption: true, //Set title as required
          type: 'string'
        }
      },
      handler: function (argv) {
        notes.removeNote(argv.title)
      }
    })

yargs.parse() //Must be written to parse yargs
// console.log(yargs.argv);
