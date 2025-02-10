   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"
   import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"

const firebaseConfig = {
    databaseURL: process.env.REACT_APP_FIREBASE_REALTIME_DB
}

console.log(firebaseConfig.databaseURL)

/* const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
const savetabBtn = document.getElementById("savetab-btn")


if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

savetabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads)
    })
})

function renderLeads(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++)
    {
        
        listItems += `
            <li>
                 <a target = '_blank' href='${leads[i]}'>
                    ${leads[i]}
                 </a>
            </li>`
    }
    ulEl.innerHTML = listItems
    inputEl.value = '';

}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})


inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    renderLeads(myLeads);
    console.log( localStorage.getItem("myLeads"))
    
})
*/