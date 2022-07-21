const core = require('@actions/core')
const github = require('@actions/github')
const { Octokit } = require("@octokit/action")
const { createActionAuth } = require("@octokit/auth-action")

const run = async () => {
    try {
        const { repo, runId: run_id } = github.context
        // user input job name
        const job_name = core.getInput('job-name', { required: true })
    
        const auth = createActionAuth()
        const authentication = await auth()
    
        const octokit = new Octokit({
          auth: authentication.token
        })
    

    
      } catch (error) {
        core.setFailed(error.message)
      }


}

run()