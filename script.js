const infos = [
    {
        img : 'url("source/Image-8.png")',
        txt : "Front-End vs Back-End Developer: What's the Diffenrence?",
        date : "January 3, 2023",
        status : 4.8
    },
    {
        img : 'url("source/Image-7.png")',
        txt : "What is a Full-Stuck Developer?",
        date : "January 12, 2023",
        status : 3.2
    },
    {
        img : 'url("source/Image-6.png")',
        txt : "What are Soft Skills and How Do They Benefit Your Career?",
        date : "January 22, 2023",
        status : 2.8
    }
    ,{
        img : 'url("source/Image-5.png")',
        txt : "IT Jobs: In-Demand, Available to Everyone, Ripe With Opportunity",
        date : "January 28, 2023",
        status : 7.6
    },
    {
        img : 'url("source/Image-4.png")',
        txt : "7 Learning Tips for Data Science Self-Study",
        date : "February 01, 2023",
        status : 1.5
    },{
        img : 'url("source/Image-3.png")',
        txt : "Hard Skills vs. Soft Skills: Do You Really Need Both? Why?",
        date : "February 10, 2023",
        status : 4.9
    },{
        img : 'url("source/Image-2.png")',
        txt : "What is JavaScript?",
        date : "February 16, 2023",
        status : 3.1
    },{
        img : 'url("source/Image-1.png")',
        txt : "Who  is a Business Analyst: Roles, Skills, Salaries, Job Prospects",
        date : "February 22, 2023",
        status : 2.4
    },{
        img : 'url("source/Image.png")',
        txt : "How Much Do Data Analysts Make? 2023 Salary Guide",
        date : "January 24, 2023",
        status : 2.6
    }
]






infos.forEach(element => {
    const main = document.getElementById("main")
    
    const card = document.createElement("div")
    card.classList.add("card")


    const img = document.createElement("div")
    img.classList.add("img")
    img.style.backgroundImage = element.img

    
    const info = document.createElement("div")
    info.classList.add("info")

    const check = document.createElement("div")
    check.classList.add("check")
    check.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

    const xBtn = document.createElement("div")
    xBtn.classList.add("xBtn")
    xBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

    const postInfo = document.createElement("div")
    postInfo.classList.add("postInfo")

    const postDate = document.createElement("div")
    postDate.classList.add("postDate")
    postDate.innerText = element.date

    const labelStatus = document.createElement("div")
    labelStatus.classList.add("labelStatus")
    
    const heart = document.createElement("span")
    heart.classList.add("heart")
    heart.innerHTML = '<i class="fa-regular fa-heart"></i>';

    const stats = document.createElement("span")
    stats.classList.add("stats")
    stats.innerText = element.status + "K";
    
    const title = document.createElement("div")
    title.classList.add("title")
    title.innerText = element.txt


    
    
    main.appendChild(card)
    card.appendChild(img)
    card.appendChild(info)
    info.appendChild(check)
    info.appendChild(xBtn)
    info.appendChild(title)
    info.appendChild(postInfo)
    postInfo.appendChild(postDate)
    postInfo.appendChild(labelStatus)
    labelStatus.appendChild(heart)
    labelStatus.appendChild(stats)
    
    
    
        xBtn.addEventListener("click", () => {
            const index = infos.indexOf(element);
            if (index !== -1) {
                infos.splice(index, 1);
                card.remove();
            }
        });
    
        //heart btn
        let isActive = false
        heart.addEventListener("click", () => {
            if(!isActive){
                isActive = true
                element.status += 0.1;
                stats.innerText = element.status.toFixed(1) + "K";
                heart.style.color = "#0266FF"
            }else{
                isActive = false
                element.status -= 0.1;
                stats.innerText = element.status.toFixed(1) + "K";
                heart.style.color = "black"

            }
            console.log(isActive)
        });
        

})


const cards = Array.from(document.getElementsByClassName("card"))

let isActive = false;

cards.forEach(ele => {
    const check = ele.querySelector(".fa-circle-check");
    const x = ele.querySelector(".fa-x");
    const img = ele.querySelector(".img");
    const title = ele.querySelector(".title");

    ele.addEventListener("mouseover", e => {
        check.setAttribute("id", "show")
        x.setAttribute("id", "show")
        img.style.opacity = "0.8";
    })
    ele.addEventListener("mouseout", e => {
        if(!isActive){
            check.removeAttribute("id")
        }
        x.removeAttribute("id")
        img.style.opacity = "1";
    })


    check.addEventListener("click", e => {
        
        if(!isActive){
            isActive = true

            check.style.color = "#0266FF"
            title.style.color = "gray"; 
        }else{

            isActive = false
            check.removeAttribute("id")

            check.style.color = ""
            title.style.color = ""
        }
      })
})



  
