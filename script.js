

const formData = document.getElementById("survey-form");
const tblFirstname = document.getElementById("firstname");
const tblLastname = document.getElementById("lastname");
const tblAddress = document.getElementById("address");
const tblPincode = document.getElementById("pincode");
const tblGender = document.getElementById("gender1");
const tblFood = document.getElementById("food");
const tblComments = document.getElementById("comment");
const tblState = document.getElementById("state1");
const tblCountry = document.getElementById("country1");


formData.addEventListener("submit",(e)=>{
   e.preventDefault()
    const Firstname = document.querySelector('input[name="firstname"]').value;
    const Lastname = document.querySelector('input[name="lastname"]').value;
    const Address = document.querySelector('input[name="address"]').value;
    const Pincode = document.querySelector('input[name="pincode"]').value;
    const Gender = document.querySelector('input[name="gender"]:checked').value;
    const Food = document.querySelectorAll('input[name="food"]');
    const Comments = document.querySelector('#comments').value;
    const Country = document.querySelector('#country').value;
    const State = document.querySelector('#state').value;
    const Foodlist = []
    for(let i=0;i<Food.length;i++){
        if(Food[i].checked === true){
            Foodlist.push(Food[i].value);
        }
    }
    if(Foodlist.length===0){
       return alert("select food items");
    }else if(Foodlist.length<2){
        return  alert("select atleast two items");
    }
    tblFirstname.innerHTML = Firstname;
    tblLastname.innerHTML = Lastname;
    tblAddress.innerHTML = Address;
    tblPincode.innerHTML = Pincode;
    tblGender.innerHTML = Gender;
    tblFood.innerHTML = Foodlist.join(",");
    tblComments.innerHTML = Comments;
    tblState.innerHTML = State;
    tblCountry.innerHTML = Country;

    formData.reset();
    

})
 