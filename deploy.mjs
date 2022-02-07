#!/usr/bin/env zx
// $.verbose = false

const step = async(msg, fn) => {
  let p
  if($.verbose) {
    console.log(chalk.blue(`** ${msg} ...\n`))
    process.stdout.write('  ')
    p = await fn()
    // const spinner = chalkAnimation.radar('...')
    // spinner.stop()
    console.log('\n')

  } else {
    process.stdout.write(chalk.blue(`** ${msg} ...`))
    p = await fn()
    // const spinner = chalkAnimation.radar('...')
    // spinner.stop()
    console.log(chalk.green(' done!'))
  }
  return p
}

await step('Switching to main branch', () => $`git checkout main`)
await step('Clearing out local copies of site', () => $`rm -rf out ; rm -rf docs`)
await step('Building next.js site', () => $`npm run deploy:build`)
const output = await step('Checking if local copy of deploy branch exists', () => nothrow($`git branch -a | grep gh-pages | grep -v remotes`))

if(output.exitCode !== 1) {
  console.log(chalk.yellow('  - Branch found, let\'s delete it'))
  await step('Deleting gh-pages since it exists locally', () => $`git branch -D gh-pages`)
} else {
  console.log('  - No branch found, good to go!')
}

await step('Creating deploy branch named `gh-pages`', () => $`git checkout -b gh-pages`)
await step('Adding jekyll ignore file', () => $`touch out/.nojekyll`)
await step('Copying `out` to `docs`', () => $`mv out docs`)
await step('git add --all', () => $`git add --all ./docs -f`)
await step('Committing build output', () => $`git commit -m ${'Deploy Next.js to gh-pages'}`)
await step('Force pushing deploy branch', () => $`git push origin gh-pages -f`)
await step('Switching back to main', () => $`git checkout main`)
await step('Cleaning up: Deleting deploy branch', () => $`git branch -D gh-pages`)

