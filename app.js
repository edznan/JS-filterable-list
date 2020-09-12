readData = () => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let arr = JSON.parse(this.responseText);
            appendData(arr);
        }
    };
    xmlhttp.open("GET", "people.json", true);
    xmlhttp.send();
}

readData();

appendData = raw => {
    let str = '';
    for(let i = 1; i < 101; i++) {
        str += `
        <li class="collection-item">
            <a href="#">
                <div class="row">
                    <div class="col s4 m4 l4">
                        <span class="ordinal-num">${i}</span>
                        <span class="name">${raw[i.toString()][0].name}</span>
                    </div>
                    <div class="col s3 m4 l2">
                        <span class="time-period">[ ${raw[i.toString()][0].time_period} ]</span>
                    </div>
                    <div class="col s4 m4 l6">
                        <span class="occupation">${raw[i.toString()][0].occupation}</span>
                    </div>
                </div>
            </a>
        </li>
    `;
    }
    str += '</ul>';
    document.getElementById('names').innerHTML += str;
}



// get input element
let filterInput = document.getElementById('filterInput');
//add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	//get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	
	//get names ul
	let ul = document.getElementById('names');
	//get li from ul
	let li = ul.querySelectorAll('li.collection-item');
	
	//loop through collection-item lis
	for(let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];
		//if matched 
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
		   li[i].style.display = '';
		   } else {
			li[i].style.display = 'none';
		   }
	}
		
	
}