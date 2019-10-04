// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabHolder = document.querySelector('.topics');

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then( response => {
        //console.log(response);
        let info = [];
        info = response.data;
        //console.log(info);
       // console.log(info.topics);
        let info2 = info.topics; //couldn't put info.topics.forEach
        info2.forEach(element => {
            tabHolder.appendChild(createTab(element));
            //the then has to attach the tab to the container
        })
     
    })
    .catch(err => {
        console.log("You gotta knock a little harder.", error)
    });




function createTab(element){ //the function has to take the array VALUE
    const tabee = document.createElement('div');

    tabee.classList.add('tab');

    //no structure needed!

        tabee.textContent = element;
    
    
return tabee

}





