var check_phone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
        var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
        var check_username = /^[A-Za-z0-9_]{1,20}$/;
        var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

        function checknull(txt){
            if(txt.value.length==0)
                return true;
            else
                return false;
        }

        function isInteger(txt)
        {
            if((!isNaN(txt.value)) && (parseInt(txt.value)===Number(txt.value)))
                return true;
            else
                return false;
        }

        function notCheck(radio)
        {
            var rt=true;
            for(i=0; i<radio.length; i++)
                if(radio[i].checked)
                    rt=false;
                return rt;
        }

        function StringMatch(txt, reg)
        {
            return reg.test(txt.value);
        }

        function validform(f)
        {
            if(checknull(f.fullname))
            {
                alert(f.fullname.name + " must be not null");
                f.fullname.focus();
                return;
            }
            if(checknull(f.age))
            {
                alert(f.age.name + " must be not null");
                f.age.focus();
                reutrn;
            }
            if(isNaN(f.age.value))
            {
                alert(f.age.name + " must be a number");
                f.age.value="";
                f.age.focus();
                return;
            }
            if(!isInteger(f.age))
            {
                alert(f.age.name + " must be an integer number");
                f.age.value="";
                f.age.focus();
                return;
            }
            if(eval(f.age.value)<=0 || eval(f.age.value)>=200)
            {
                alert(f.age.name + " must be in (0-200)");
                f.age.value="";
                f.age.focus();
                return;
            }
            if(notCheck(f.gender))
            {
                alert("gender must be choosen");
                return;
            }
            if(!StringMatch(f.phone, check_phone))
            {
                alert("phone is not value");
                f.phone.value="";
                f.phone.focus();
                return;
            }
            if(!StringMatch(f.email, check_email))
            {
                alert("email is not value");
                f.email.value="";
                f.email.focus();
                return;
            }
            alert("all fields are valid!!!");
        }