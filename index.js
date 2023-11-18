const jsonfile = require('jsonfile')
const moment = require('moment');
const FILE_PATH = './data.json'
const DATE = moment().format();
const simpleGit = require('simple-git');

const data = {
  data:DATE
}

jsonfile.writeFile(FILE_PATH, data)
simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE}).push()