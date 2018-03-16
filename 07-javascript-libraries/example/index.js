const fs = require('fs')
const _ = require('lodash')

fs.readFile('./bob.csv', 'utf8', function(err, data) {
  console.log(data)
  console.log(main(data))
})


function main(string) {
  const newLineSplit =  _.split(string, '\n')
  const commaSplit = _.map(newLineSplit, s => _.split(s, ','))
  const headers = _.head(commaSplit)
  const body = _.tail(commaSplit)

  const csvData = createObjectOfArrays(headers, body)
  const bobCommits = numberOfCommitsForPerson(csvData, 'bob')
  const zachCommits = numberOfCommitsForPerson(csvData, 'zach')
  return `number of commits for zach: ${zachCommits}, number of commits for bob: ${bobCommits}`
}

// function splitOnNewLine
// function splitOnComma

function createObjectOfArrays(headers, body) {
  return _.map(body, b => createRowObject(headers, b))
}

function createRowObject(names, values) {
  return _.zipObject(names, values)
}

function numberOfCommitsForPerson(data, name) {
  const filterForName = _.filter(data, r => r.name === name)
  return filterForName.length
}
