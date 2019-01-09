console.log("satrating app.js");
const notes=require('./notes.js')
const yargs =require('yargs')
var help=`
Options:
--help        show help
--title       title of node
--body        body of note
`
var title = yargs.argv.title
var body= yargs.argv.body
var command = yargs.argv._[0]

switch(command) {
    case "add":
    console.log("adding note");
    notes.addingNote(title, body)
      break;
    case "remove":
    console.log("removing note");
    notes.removeNote(title)
      break;
    case "read":
    console.log("reading note");
    notes.readNote(title)
      break;
    case "list":
    console.log("listing all note");
    notes.listingAll()
      break;
    default:
      console.log(help)
  } 