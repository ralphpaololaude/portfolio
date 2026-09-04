---
template: n8n.html
hide:
    - navigation
---

# Get Freelance.com Projects

## Problem

Having access to the latest projects from Freelancer.com is a huge advantage. The email notification is only sent daily, does not include all new projects, and provides incomplete description.

## Solution

This workflow queries all active Freelancer.com projects updated from the last eight hours. An AI agent summarizes the project description and lists required skillsets for the project. The data is stored in an n8n data table to make it accessible to multiple workflows.

## Technology

- n8n
- REST API ([Freelancer.com API](https://developers.freelancer.com/docs))
- AI Prompt

## Node Descriptions

<n8n-demo id="demo" frame="true" data-file="freelancerProjects"></n8n-demo>

| Node | Details |
| --- | --- |
| GetUserInfo | <div>Fetches the user's information. The `jobs` query parameter is set to `true` to include full information about the user's skills.  |
| SplitJobs | Outputs the user's `jobs` information. |
| LoopJobs | Loops the *GetFreelanceProjects* node against each *job.id*. The three-second Wait node helps avoid hitting API limits. |
| GetFreelanceProjects | <div>Fetches all active projects filtered with the following query parameters: <div></div> <div><ul><li>`languages[]` : `en`</li><li>`full_description` : `true` - Include the full description of the project.</li><li>`jobs[]` : `job.id` - Uses the *job.id* from the item in the current loop.</li><li>`from_time` : `$now.minus({ hours: 8 })` - Filter projects updated in the past 8 hours.</li><li>`limit` : `100`</li></ul></div> |
| GetProjectsObject | Collects all queried projects. |
| RemoveDuplicateProjects | Removes duplicate projects by *project.id*. |
| CheckExistingRow | Removes projects already listed in the data table (i.e., updated eight hours ago but created before that). |
| SetProjectFields | Extracts the following fields: `title`, `currency`, `description`, `budget`, `time_submitted`, `seo_url`, and `id`. |
| LoopProjects | Loops one project every 15 seconds to optimize AI token use. |
| AnalyzeProjectDetails | The AI agent that: <ul><li>Summarizes the job description.</li><li>Lists five required skills for the project.</li></ul> |
| ProjectSummary | Parses the AI agent's output as `summary` and `skills`. |
| AddProjectData | Adds the project information to an n8n data table. |

## Challenges

- The workflow is locally-hosted (community version) and lacks some features from the paid version.
- The chat model is on free tier with limited resources (e.g., TPM, RPM), causing the workflow to run into 'over limit' errors.
- The `jobs[]` query parameter only accepts a single value, which required looping.

## Future Improvements

- Optimize query parameters and item filtering to maximize resource usage for the chat model.
- Add more information for the AI agent to process.
- Refine the AI agent's prompt.