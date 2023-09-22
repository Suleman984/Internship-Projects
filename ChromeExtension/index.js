let myLeads = []
let oldLeads=[]
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const delBtn=document.getElementById('del-btn');
const tabBtn=document.getElementById('tab-btn');
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//saveBtn
saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
//deleteBtn
delBtn.addEventListener('dblclick',function(){
  localStorage.clear();
  myLeads=[];
  render(myLeads);
})
//tabBtn
tabBtn.addEventListener('click',function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
  })
  
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
