![68747470733a2f2f6a2e746f7034746f702e696f2f705f333238307436337239312e706e67](https://github.com/user-attachments/assets/a8575c85-5907-4a63-adb2-94f1613fc2ff)



# what is it ?
Through this project, you can easily read the sensors of your devices with the possibility of adding modifications. It is written using the python Flask framework and was originally built to target Tuya IoT devices. However, you can easily modify it to make it compatible with other devices.


# Required Python packages

 ```
  pip install Flask
  
  pip install tinytuya
 
```

# how to use it ?
  ### back end

   **There are two essential things for running the project smoothly and reading the sensors to suit your needs**
   1. on helpers.py file ther is function called ```connect_devise``` we will use that function to get sensors values using tinytuya module
   that function you can edit it if u know how to coding and add your other iot devices and if u use tinytuya devise keep it 
   and will be better if u return dict from it later we know why
    ![image](https://github.com/user-attachments/assets/b78c1301-758c-4816-8af7-06b421806c69)

  
   2. on main.py file there is route called api when u call it from front end will get json format includes the keys you set
      as devices and values on it so you can work that dict returned as json like list of devices and ```connect_devise``` used 
      to call the calues into that key

        for example i have set the keys like that
        
      ![image](https://github.com/user-attachments/assets/84150e4f-1164-4e38-8712-1b0305c9127c)


        
         the respone from browser will be like
           
         ![image](https://github.com/user-attachments/assets/9a80e0cf-f5f7-4c89-95a8-5bf636899b9a)
         or
         ![image](https://github.com/user-attachments/assets/86448d46-8cbb-4f26-aa63-5b59e3a9441a)



           


        **Note: the respone format depens on what you return from connect_devise function to based on tinytuya module its will return dict to us wich is will be json when returned using flask route**



  ### front end
   on front end we will use free html template of my made using chart.js and some css
   so to make it easy for u you will find the part on static/index/front_end_reader.js  
   wich keep sending requests to api route to get our devices values wich looks like that
     
   ![image](https://github.com/user-attachments/assets/e20ef63c-7122-4d8a-91d4-8e3aa97750d1)

  i know you are convisued let me explane
  the code above is part of my read for device tuya AS90W
  so your code will be like that
  
  ![image](https://github.com/user-attachments/assets/dfe82a61-4b41-48a2-b69b-8022cfc86e57)

  
  so now you can use the devices json respone to do somethings with ur values
  to make it easy for u i made  javescript method called update that take the html chart div id of ur read sansor 
  and the value

     update(chartid,value)


 

# you can contact me if u have any proplems 
  [telegram](https://t.me/WW0BB)

  
