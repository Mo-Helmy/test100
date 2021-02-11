Follow the following steps to check the health of an elastic beanstalk application

1. Start by connecting the EB CLI to the environment with `eb use <application-name>`.
2. Check the health of the environment with the `eb health`. This will bring up a table with different information about the servers running your application.
3. If you see that the health is not indicating a "OK" status, use the `eb logs` command. This will print out the logs to your terminal. You can inspect them to look for failures
