This is my tech blog app!

Unfortunately, i am running into another error when attempting to sign into the SQL Server. Previously, i was only receiving one error stating that access is denied for user '"@"localhost' (using password: YES). Now, i am receiving that error along with the following error.


  code: 'ER_ACCESS_DENIED_ERROR',
    errno: 1045,
    sqlState: '28000',
    sqlMessage: "Access denied for user ''@'localhost' (using password: NO)",
    sql: undefined


Im not sure why i am still receiving this error. I fixed it previously, and was able to work on the group project 2 perfectly fine with no issues.

I was not able to test the entire project, but i was able to confirm that handlebars and the routes all work. Below is a video example of the error i am receiving.

https://youtu.be/YdMKKp5rScc

https://vast-refuge-09549.herokuapp.com/

https://github.com/Michael-Ishmail/challenge-14

