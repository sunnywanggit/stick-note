require('less/index.less');
const $ = require('jquery')
let NoteManager = require('../modules/note-manager.js').NoteManager;
let Event = require('../modules/event.js');
let WaterFall = require('../modules/waterfall.js');

NoteManager.load();

$('.add-note').on('click', function() { NoteManager.add(); })

Event.on('waterfall', function(){ WaterFall.init($('#content')); })
