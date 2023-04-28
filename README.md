<!-- ABOUT THE PROJECT -->
# About The Project
This ToDo App is used to test different tech stacks given it has full CRUD functionality. Each tech environment has its own respected branch with the name matching to seperate different tech stacks to used for testing different packages and theories. This can also be used to reference structured architecture for the tech stacks.

<!-- RULES -->
# Rules
## Commits
There are 3 sections per commit message:
1. type[optional scope]: description
2. [optional body]
3. [optional footer(s)]

Listed below are the `type` prefixes:
- feat: a new feature for the user, not a new feature for a build script
- fix: bug fix for the user, not a fix to a build scripts
- refactor: refactoring production code
- devops: updating .yaml's, dockerfile's, etc...
- docs: changes to documentation
- style: formatting, missing semicolons, etc.; no code change
- perf: code improved in terms of processing performance
- vendor: update version for dependencies, packages.
- test: adding missing tests, refactoring tests; no production code change

## Branches
Each `parent-*` and `parent-*-child-*` branch is it's own orphan to avoid any branch merging and keep the tech stacks seperated.
All work on orphan branches should be done by creating a new branch off of it and merged in later.
All branches created from orphans should use rebase to avoid unwanted commit messages.
All new branches from orphans are feature based and should ensure the commit message rules are followed.

Branch Names and Details:
- branch(incomplete): parent-one-react-node
    - Tech Stack: nodejs, express, sqlite3, knex, react, axios, css, eslint, prettier, react-testing-library, jest, playwright
  - branch(incomplete): parent-one-child-one-react-jss
    - Difference(s):
      - css/react-jss
  - branch(incomplete): parent-one-child-two-postgress
    - Difference(s):
      - sqlite3/postgress
- branch(incomplete): parent-two-react-dotnet-core
  - Tech Stack: Entity Framework Core, Microsoft Sql, xUnit, typescript, react, axios, react-jss, eslint, prettier, react-testing-library, jest, playwright
- branch(incomplete): parent-three-dotnet-mvc
  - Tech Stack: Entity Framework, MySql, Razor, xUnit

<!-- GETTING STARTED -->
# Getting Started
Follow the Readme Markdowns in the respected branch with the tech stack you wish to use.

<!-- CONTACT -->
# Contact
James Page - Owner/Developer:
- LinkedIn: https://www.linkedin.com/in/james-page-701aa11b7/

<!-- LICENSE -->
# License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGMENTS -->
# Acknowledgments
- Readme Markdown Template: https://github.com/othneildrew/Best-README-Template
- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- Commit Prefixes: https://dev.to/puritanic/how-are-you-writing-a-commit-message-1ih7