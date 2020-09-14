# Typescript-4.0

Learning TypeScript:

npm install -g typescript ts-node

1)API we will use to fetch data
2)Create a new project directory
3)Create package.json file
4)Install axios to make request

Then start writing the code
jsonplaceholder.typicode.com
For fake API
We will use /todos for fetching data
http://jsonplaceholder.typicode.com/todos
http://jsonplaceholder.typicode.com/todos/1
For example if i am fetching 1st id i will write todos/1

Task 1:
mkdir FetchJson
cd FetchJson
npm init -y
npm install axios
axios is used for network request

Executing Typescript code
index.ts
Follow the code in this file
run on terminal:
tsc index.ts
node index.js
We can use 'ts-node index.ts' instead using tsc index.ts and node index.js

Task 2:

Follow the code in this file
index.js
working with to get todos

In task we have to find out bugs

Task 3:

Follow the code in this file
index.js
We will sort out all the bugs

Task 4:

Follow the code in this file
index.js
Cating more errors

Task 5:
commit 5 topics
type,annotation,annotation with variables
annotation with object literals
annotation around function
understand interface,any type,fixing any type
delayed initialization
annotation around function

Task 6:
commit 7 topics
1)type array,multiple type arrays
2)when to use type arrays,tuples in typescript
<<<<<<< HEAD:features/README.md
3)tuples in action,
=======
3)tuples in action,long type annotation
4)fixing annotation with interfaces,synatx around interfaces
5)functions in interface,Reuse with interfaces,classes,Basic of inhertence

Task 7:
follow task6 branch
1)class method modifier,fields in classes,fields with inheritence,where to use class
2)npm install -g parcel-bundler
3)mkdir maps make index.html and index.ts 
and run parcel index.html.all code is push to branch task6

Task 8:
follow task6 branch
cd maps
1)npm i faker and npm install @types/faker
2)https://console.developers.google.com go to this link create project then go to javascript maps click on it
then go to dashboard click on credentials and generate an API key then go to index.html
and this <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCaqnF1Ci1lfPuuYkkedYb8XWyp-3GcI40"></script>
it also contain API_KEY
npm i @types/googlemaps purpose to install this because if u don't install it will give error while writing google in index.ts
follow the guide and map app is completed



>>>>>>> 58591e829a6f732b210e7cac94fa35674a04d8ff:README.md
