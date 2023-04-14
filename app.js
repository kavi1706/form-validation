function validate()
        {
            var name=document.myform.name.value;
            var pass=document.myform.pass.value;
            var em=document.myform.email.value;
            var n=document.myform.n.value;
            var x=document.getElementById("mycheck").checked;
            var reg=/^([a-z])+([a-z0-9])*\@([A-Za-z0-9\.])+\.([A-Za-z]{2,4})$/;
            let p=/^[A-z0-9]{8,12}$/;
            let pattern=/^[A-z\.]*{6,10}$/;
            let p1=/^([A-Z])+\.[A-Z]*$/;
            var result=pattern.test(name);
            var res=p.test(pass);
            var w=reg.test(em);
            var ee=p1.test(n);
            
            if(name==null || name=="" || name.length==0)
            {
               alert("Please enter name");
               return false;
            }
            if(!result)
            {
                alert("Please fill name correctly");
                return false;
            }
            if(pass.length>12)
            {
                alert("Password should not exceed 12 characters");
                return false;
            }
            if(!res)
            {
                alert("Enter valid password");
                document.myform.pass.focus();
                return false;
            }
        
            if(!w)
            {
                alert("Enter valid mail")
                return false;
               
            }
            
            if(!ee)
            {
                alert("Enter in caps..Initial at first")
            }
            if(document.myform.city.selectedIndex<0)
            {
                alert("please select city!!");
                return false;
            }
            
                var sel=document.getElementById("city");
                var selectedText=sel.options[sel.selectedIndex].text;
                alert("You have selected"+selectedText);
            
            
            
        }