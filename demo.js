const fs = require('fs')
const path = require('path')
const markdownMagic = require('markdown-magic')

const config = {
  transforms: {
    /* Match AUTO-GENERATED-CONTENT (customTransform:optionOne=hi&optionOne=DUDE) */
    customTransform(content, options) {
      console.log('original innerContent', content)
      console.log(options) // { optionOne: hi, optionOne: DUDE}
      return `This will replace all the contents of inside the comment ${options.optionOne}`
    },
    // /* Match AUTO-GENERATED-CONTENT (RENDERDOCS:path=../file.js) */
    // RENDERDOCS(content, options) {
    //   const contents = fs.readFileSync(options.path, 'utf8')
    //   const docBlocs = require('dox').parseComments(contents, { raw: true, skipSingleStar: true })
    //   let updatedContent = ''
    //   docBlocs.forEach((data) => {
    //     updatedContent += `${data.description.full}\n\n`
    //   })
    //   return updatedContent.replace(/^\s+|\s+$/g, '')
    // },
    // pluginExample: require('./plugin-example')({ addNewLine: true }),
    // count: require('markdown-magic-wordcount'),
    // github: require('markdown-magic-github-contributors')
  }
}

const markdownPath = path.join(__dirname, 'demo.md')
markdownMagic(markdownPath, config, function(err, output) {
  // output is array of file information
  console.log('FINISHED')
})
