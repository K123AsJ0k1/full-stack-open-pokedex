# Exercise 11.1 text

Let’s assume a team of 6 people is working with a Java application, which is in active development and will be released soon. What tools do they need to consider regarding linting, testing, and building? Linting needs to clean the code and stop apparent problems, so the former can be done by Checkstyle and the latter by either SpotBugs, PMD, or Error Prone. Testing needs to ensure that the done changes don’t break existing features. This can be guaranteed with unit, integration, and End-to-end testing. There are many unit and integration testing options, like Junit, Maven, Mockito, and JBehave. For end-to-end testing, there is Selenium or Cucumber. Building needs to put the code into software, and it should preferably allow high-level automation. There are many options for these requirements, like Maven, Gradle, Apache ant, TeamCity, and Jenkins.

Usually, the CI setup is done with Jenkins or GitHub Action, but what if this team wants another solution? Additionally, since they are a small team, should they put this setup on a self-hosted or a cloud-based environment? There are many options for replacing Jenkins or Github Actions, like CircleCI, GitLab CI, Azure Pipelines, Buildkite, and Confluence, that should be considered alongside the chosen environment. A cloud-based environment is better if the team doesn’t have resources for hardware or supporting it, they have a network connection, and the costs are manageable since it is scalable and flexible, eases burdens, and allows easy backups. However, a team with resources that desires hardware control, security, privacy, and low bandwidth costs, should consider a self-hosted environment. However, this consideration should remember that respon-sibility is entirely on the team; the servers need upkeep and can limit scalability.

---