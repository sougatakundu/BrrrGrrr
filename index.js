
function calculateTotal() {
    let total = 0,count=0;
    let bill="";
    const items = document.getElementsByName("item");
    // console.log(items);
  
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) { 
        count++;
        total += parseFloat(items[i].dataset.price);
        // console.log(items[i].value);
        bill+=count+"."+items[i].value+"  ";
  
      }
    }
  
    document.getElementById("totalAmount").innerHTML = "₹ "+total.toFixed(2);
    document.getElementById("bill").innerHTML=bill;
    if(count>0)
    document.getElementById("thank").style.visibility="visible";
    else{
        alert("Select an item");
    }

    
  }
  
  document.getElementById("year").innerHTML= new Date().getFullYear();