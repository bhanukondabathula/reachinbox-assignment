# ReachInBox-Frontend

## Overview
This repository contains the code for Reachinbox frontend App using React with Javascript for an assignment given by Reachinbox.

## Technologies Used ( Frontend )
  - Javascript
  - React + Vite
  - Tailwind CSS



 # How to Run <br/>
 
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run start ``` <br/>
   Open your browser and visit:   ``` http://localhost:5173 ``` <br/>
   

   ## Features 
   
  - Login Authentication (/google-login)
  - Light and Dark Mode
  - Get All Emails (fetching of data in OneBox using API integration)
  - Custom Text Editor
  - Reply (Send) Email
  - Delete Email
  - Keyboard shortcuts in OneBox:- “D” delete an email and “R” open Reply box


   <h2>Endpoints</h2>
    Base URL : "https://hiring.reachinbox.xyz/api/v1/"
   <h3>List All Emails</h3>
   <pre><code>GET {{baseurl}}/onebox/list </code></pre>

   <h3>Get Messages in Onebox</h3>
   <pre><code>GET {{baseurl}}/onebox/messages/:thread_id </code></pre>

   <h3>Reply Email</h3>
   <pre><code>POST {{baseurl}}/onebox/reply/:thread_id </code></pre>

   <h3>Delete Email</h3>
   <pre><code>DELETE {{baseurl}}/onebox/messages/:thread_id </code></pre>

 
  
