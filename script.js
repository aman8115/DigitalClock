setInterval(()=>{
    let hour = document.getElementById("hour");
    let minute = document.getElementById("min");
    let seco = document.getElementById("second")
    

      let currentTime = new Date();
      hour.innerHTML = (currentTime.getHours() <10?"0":"")+currentTime.getHours();
     minute.innerHTML = (currentTime.getMinutes() <10?"0":"")+currentTime.getMinutes();
     seco.innerHTML = (currentTime.getSeconds() <10? "0":"")+currentTime.getSeconds();
     



},1000)