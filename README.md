## Clone the repositary into local using git clone command
## Steps to run the test case
  1. open terminal and execute below command
  2. npm i
  3. npx playwright install
  4. Add .env file at the root level of project
  5. Add GITHUB_TOKEN and GITHUB_TOKEN_WITHOUT_PERMISSION key with values in .env file
  6. run this command into terminal npx playwright test -g "@userTokeneTest"
  7. Once its executed the report will be stored in reports folder with name index.html