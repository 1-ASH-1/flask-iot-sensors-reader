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
   - In the helpers.py file, there is a function called connect_device. We will use this function to retrieve sensor values using the tinytuya module.
      You can edit that function if you know how to code and add other IoT devices. If you are using a tinytuya device, keep it as is. It would be better to return a          dictionary from the function, and later we will explain why.
      
      ![image](https://github.com/user-attachments/assets/b78c1301-758c-4816-8af7-06b421806c69)

  
   - In the main.py file, there is a route called api. When you call it from the frontend, it will return a JSON response that includes the keys you've set as devices and their corresponding values. You can work with this dictionary, which is returned in JSON format, as a list of devices. The connect_device function is used to retrieve the values for each key.

For example, I have set the keys like this:
        
   ![image](https://github.com/user-attachments/assets/84150e4f-1164-4e38-8712-1b0305c9127c)


        
   the respone from browser will be like
           
   ![image](https://github.com/user-attachments/assets/9a80e0cf-f5f7-4c89-95a8-5bf636899b9a)
   or
   ![image](https://github.com/user-attachments/assets/86448d46-8cbb-4f26-aa63-5b59e3a9441a)



           


   **Note:The response format depends on what you return from the connect_device function. Based on the tinytuya module, it will return a dictionary, which will be converted to JSON when returned via the Flask route.**



  ### front end
   - On the frontend, we will use a free HTML template that I created using Chart.js and some custom CSS. To make it easier for you, you will find the relevant part in static/  index/front_end_reader.js, which continuously sends requests to the api route to get the device values. The response from the API will look like this:
     
   ![image](https://github.com/user-attachments/assets/e20ef63c-7122-4d8a-91d4-8e3aa97750d1)

I know you might be confused, so let me explain.
The code above is part of my method to read the device Tuya AS90W.
Your code will look like this:
  
  ![image](https://github.com/user-attachments/assets/dfe82a61-4b41-48a2-b69b-8022cfc86e57)

  
Now, you can use the devices' JSON response to work with your values. To make it easier for you, I created a JavaScript method called update that takes the HTML chart div ID of your read sensor and the corresponding value.

     update(chartid,value)


 

# you can contact me if u have any proplems 
  [telegram](https://t.me/WW0BB)

  
