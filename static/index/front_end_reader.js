function get_data(){
  
  
fetch("/api")
.then(respone=>respone.json())
.then(devices=>{
  
  
  var AS90W = devices['AS90W']
 
  update(temp,AS90W.dps[1]/10)
  update(humidity,AS90W.dps[2]/10)
  update(light,AS90W.dps[16])
  
  
})

}

get_data()
setInterval(e=>{get_data()},5000)