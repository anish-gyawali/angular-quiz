`Simple quiz application is build using MEAN stack.`

To create the Heroku application we need to follow the following steps:

For the node and express backend:
1)	First make new directory using ` mkdir directoryname`
2)	Following the Heroku documentation we clone the git:
`git clone https://github.com/heroku/node-js-getting-started.git your_app_name`
3)	Change the directory to the recently created file `cd your_app_name`

To deploy Heroku web application:
1)	Create the name of your web application `Heroku create your_app_name`
2)	When we create app, a git remote is also created associated to our local git repository so commit to git before deploying to the Heroku. `git commit -a  -m  ‘message’ `
3)	To deploy the Heroku web application use `git push Heroku main`
Following the above steps, we are able to create node backend for our angular projects.

To make sure if the backend is working is not you can use postman to check the API end points.
Endpoints:

`POST:  https://node-quiz1.herokuapp.com/new/ `     (to post new quiz)
`POST: https://node-quiz1.herokuapp.com/quiz/id `   (to post quiz by id) 	
`GET: https://node-quiz1.herokuapp.com/quizzes/ `    (to get all quiz)	
`GET: https://node-quiz1.herokuapp.com/quiz/id `      (to get quiz by id)

About frontend using Angular 

Following steps are used to create angular frontend:

1)	Install the Angular globally using  `npm install -g @angular/cli `
2)	Create new angular app using `ng new your-app`
3)	Change the directory before running the application, use `cd your-app` to change the directory.
4)	To run the command use `ng serve –open`
Following the above steps you can run the single page quiz application.

![Image to display posted quiz](https://user-images.githubusercontent.com/55246779/117524229-4ac58500-af82-11eb-86ac-6a15d1390e09.PNG)
![Screenshot to create quiz](https://user-images.githubusercontent.com/55246779/117524270-67fa5380-af82-11eb-8cbb-e8fbb46dd15e.PNG)
![Screenshot to take quiz](https://user-images.githubusercontent.com/55246779/117524307-78123300-af82-11eb-9c87-5491c90095eb.PNG)

