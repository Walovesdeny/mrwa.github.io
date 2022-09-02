type= "text/javacript"
flag=1
    
    function f1()
    
    {
      alert("yown open na ml!!!")
      alert("TARAAA")
    }
    
    function f()
    {
      if(flag==1)
      {
        Bn.style.top=400
        Bn.style.left=0
        flag=2
      }
      else if(flag==2)
      {
        Bn.style.top=300
        Bn.style.left=100
        flag=3
      }
      else if(flag==3)
      {
        Bn.style.top=150
        Bn.style.left=200
        alert("bleh")
        flag=4
      }
      else if(flag==4)
        {
        Bn.style.top=0
        Bn.style.left=9
        flag=5
        }
      else if(flag==5)
        {
         Bn.style.top=150
         Bn.style.left=20
         alert ("Oh parang napapagod kana")
         flag=6
        }
      else if(flag==6)
        {
          Bn.style.top=370
          Bn.style.left= 166
          alert("ohh eto pagbibigyan na kita")
          flag=1
        }
    }