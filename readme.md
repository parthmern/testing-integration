## Integration testing

- link = https://projects.100xdevs.com/tracks/testing-2/Integration-and-End-to-End-testing-1
- in unit testing we are doing mocking the db calls

#### why not good
- local setup needed for developers ( like pg db) because they are not able to run code until it is passing through testcases
- rn we have docker but someone even donot know abot it

- Slower to execute
- Add complexity
- Local development setup if required for a developer (things like docker)


#### npm run test
- start postgres db (using docker)
- check pg health
- npx prisma migrate(create table)
- npx prisma generate (generate client)


### bash file run
- bash run-integration.sh
