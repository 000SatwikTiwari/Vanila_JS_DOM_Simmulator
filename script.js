 let st = new Set();

        //code to add form while click add , and cut it
        let add=document.querySelector(".add");
        let flag=true;
        add.addEventListener("click" , (e)=>{

            if(flag){
            document.body.insertAdjacentHTML("beforeend", `<div class="form">
        <button class="cut"><img src="cut.svg" alt=""></button>
        <div class="in_bt">
             <div class="error"></div>
            <input type="text" name="" id="title" placeholder="Enter">
             <button id="Sav">save</button>
        </div>       
        
    </div> `)
        flag =false;
}        
      
      let cut_form=document.querySelector(".cut");

      cut_form.addEventListener("click", ()=>{
          if(!flag){

            let frm=document.querySelector(".form");
            frm.remove();
            flag=true;
          }
      })  



      //saving input data :

      //check input field if it is empty popup and save data from form with error handel

     

      let save=document.querySelector("#Sav");
      save.addEventListener("click", (e)=>{
           let new_title=document.querySelector("#title").value;
           if(new_title.length===0){
               document.querySelector(".error").innerText="Please fill this"
           }
           else if(st.has(new_title)){
        document.querySelector(".error").innerText="Already exist"
           }
           else{
          let new_title=document.querySelector("#title").value;
          st.add(new_title);
          let dis=document.querySelector(".display");
          dis.insertAdjacentHTML("beforeend", ` <div class="i">
                 <button class="remove"><img src="cut.svg" alt=""></button>
                <h1 class="tit">${new_title}</h1>
            </div>`)

             let frm=document.querySelector(".form");
            flag=true;

             frm.remove();

           }

           
        //to cut the card from display
             let list=document.querySelectorAll(".remove");

        list.forEach((e)=>{
            e.addEventListener("click", (event)=>{
                let card=event.target.closest(".i");
                let oldt=card.children[1].value;
                st.delete(oldt);
                card.remove();

            })
        })

        //cut done

        //clickon card open form again

        document.querySelectorAll(".tit").forEach((e=>{
            e.addEventListener("click", (event)=>{
                let clicked_title=event.target.closest(".tit");
               
                
                     let old=clicked_title.innerText;
                     st.delete(old);
                        
            document.body.insertAdjacentHTML("beforeend", `<div class="form">
        <button class="cut"><img src="cut.svg" alt=""></button>
        <div class="in_bt">
             <div class="error"></div>
            <input type="text" name="" id="title" value="${old}" placeholder="Enter">
             <button id="Sav">save</button>
        </div>       
        
    </div> `)
      let cut_form=document.querySelector(".cut");

      cut_form.addEventListener("click", ()=>{
          

            let frm=document.querySelector(".form");
            frm.remove();
            flag=true;
         
      })  


       
   let Edit_save = document.querySelector("#Sav");
    Edit_save.addEventListener("click",(e)=>{
          let new_titl=document.querySelector("#title").value;
            if(new_titl.length===0){
               document.querySelector(".error").innerText="Please fill this"
           }
           else if(st.has(new_titl)){
        document.querySelector(".error").innerText="Already exist"
           }
          else{
            st.delete(old);
            st.add(new_titl);
            clicked_title.innerText=new_titl;
              let frm=document.querySelector(".form");
            
             frm.remove();
          }

    })

          

            })
        }))


      })



        })



       

/////////Now will work on search tech


 
    let sbar = document.querySelector(".find");
    sbar.addEventListener("click",()=>{
        let b=document.querySelector(".search");
        b.insertAdjacentHTML("beforeend", `<div class="suggestions"></div>`)


    })
   document.body.addEventListener("click", (e) => {
    let sl = document.querySelector(".suggestions");

    if (!sbar.contains(e.target) && sl && !sl.contains(e.target)) {
        sl.remove();
    }
});


sbar.addEventListener("input", () => {

    let slist = document.querySelector(".suggestions");
    slist.innerHTML = "";

    if (sbar.value.length === 0) {
        sbar.setAttribute("placeholder", "empty");
    }
    else {
        let target = sbar.value;

        let arr = [...st].filter(item => item.startsWith(target));

        arr.sort((a, b) => {
            if (a === target) return -1;
            if (b === target) return 1;

            return b.length - a.length;
        });

        if (arr.length === 0) {
            slist.insertAdjacentHTML("beforeend",
                `<div class="item"><h3 id="item">Not found</h3></div>`
            );
        }
        else {
            arr.forEach((e) => {
                slist.insertAdjacentHTML("beforeend",
                    `<div class="item"><h3 id="item">${e}</h3></div>`
                );
            });
         //on adding make them clickable

         let list_item=document.querySelectorALL("#item");
         list_item.forEach((e)=>{
              e.addEventListener("click", (event)=>{
                //write to open card and all story 
                
               

              })
         })


        }

        
    }
});
     
      
      
