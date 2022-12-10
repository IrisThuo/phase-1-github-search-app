   
  
   
   let form =document.querySelector("form")

   form.addEventListener('submit', (e)=> {
    e.preventDefault()

    let search = document.getElementById("search").value

    fetch('https://api.github.com/users/'+search)
    .then(res => res.json())
    .then((data) => { console.log(data)


     let container = document.getElementById("github-container")
     container.innerHTML = `
     <h3>username:"${data.login} "</h3>
     <img src= " ${data.avatar_url}"/>
     <a href="${data.repos_url}"> To profile. </a>
     `

   })
  
   
   fetch('https://api.github.com/users/octocat/repos')
   .then(res => res.json())
   .then((data) => { console.log(data)
       
    let repos = document.getElementById("repos-list")
     repos.innerHTML = `
     <h4>"${data.name}</h4>
     `

   

})
}) 
