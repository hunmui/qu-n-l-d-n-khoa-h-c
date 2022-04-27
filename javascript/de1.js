var ck_num=/^[0-9]{1,10}$/;
var ck_email=/^([\w-]+(\?\:\.[w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
function checkform(txt,rag){
  return rag.test(txt.value);
}
function my(){
  if(email.value==""){
    alert("email chua dc nhap!");
    return false;
  }
  if(!checkform(email,ck_email)){
    alert("email nhap ko dung dinh dang!");
    email.value="";
    email.focus();
    return false;
  }
  if(rate.value==""){
    alert("rating chua dc nhap!");
    return false;
  }
  if(!checkform(rate,ck_num)){
    alert("rate nhap ko dung dinh dang!");
    rate.value="";
    rate.focus();
    return false;
  }
  alert("ban da nhap thanh cong!");
  return true;
}