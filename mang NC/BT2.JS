var Arr = [
    {
        id: 1,
        User_Name: "Trang",
        Password: "trang123"
    },
    {
        id: 2,
        User_Name: "Trang1",
        Password: "trang1"
    },
    {
        id: 3,
        User_Name: "Trang2",
        Password: "trang2"
    },
]

function Login(User_Name, Password) {
    console.log(User_Name,Password)
    var result = true;
    for(i = 0; i < Arr.length; i++){
        if(User_Name == Arr[i].User_Name){
            if(Password == Arr[i].Password){
                result =  true
                break
            }else{
                result = false
                continue
            } 
        }else{
            result = false
            continue
            
        }
    }
    if(result == true){
        document.write("<b>Trang Chính</b>");
    }else{
        alert("Tên người dùng hoặc mật khẩu không chính xác!")
    }
}
function Clear(){
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}