	
	//get array object
	var test_1 = localStorage.getItem('sitedata');
	var myArray = JSON.parse(test_1);

function main_function()
{ 
		let FirstName = document.getElementById("firstname").value;  
		// alert(FirstName)
		let Lastname = document.getElementById("lastname").value;  

		let ID = document.getElementById("id_for_data").value;  
		// alert(RollNo)


		let name_from_user_from_storage = localStorage.getItem('sitedata');

	if (name_from_user_from_storage === null ) 
	{

			// alert('null');
			//if nul then execute this query
			var array = [];
			siteData = {'id': ID , 'name': FirstName ,'lastname': Lastname};
			// alert(JSON.stringify(siteData));
			array.push(siteData);
			// alert(JSON.stringify(array));


			localStorage.setItem('sitedata',JSON.stringify(array));
	}
	else
	{
			// array.push(siteData);
			let parsed_localstorage = JSON.parse(localStorage.getItem('sitedata'));
			// alert(parsed_localstorage)
			
			siteData = {'id': ID , 'name': FirstName ,'lastname': Lastname};
			// alert(siteData)
			
			parsed_localstorage.push(siteData);
			let stored_after_pushed = JSON.stringify(parsed_localstorage)

			localStorage.setItem('sitedata',stored_after_pushed);

	}
}

let name_from_user_from_local = localStorage.getItem('sitedata');
if (name_from_user_from_local === null ) 
{
	console.log("no thing")
}
else
{
	// get the data from localstorage and display in paragraph
	var test_1 = localStorage.getItem('sitedata');
	var test = JSON.parse(test_1);
	// console.log(test)
	console.log(test.length)
	for(let i=0; i < test.length ; i++)
	{
		document.getElementById("print_here").innerHTML += "<tr><th scope='col'>"+test[i].id + "</th><th scope='col'>"  + test[i].name + "</th><th scope='col'>" + test[i].lastname  + "</th><th scope='col'>" + "<button type='button' data-toggle='modal' data-target='#exampleModal'  id='"+test[i].id+"' class='btn btn-success' onclick='clicked_edit_this_block(this.id)'>Edit</button></th><th scope='col'>" +  "<button type='button' class='btn btn-danger' id='"+test[i].id+"'onclick='clicked_edit(this.id)'>Delete</button></th></tr>" ;
		// alert(i)

	}
	
}




function clicked_edit(value_from_button)
{
	let value_to_delete = value_from_button;
	// alert(value_to_delete)
	
	//get array object
	// var tmp = localStorage.getItem('sitedata');
	var tmp_arrray = JSON.parse(test_1);
	// alert(JSON.stringify(tmp_arrray));
	//delete object array using value_from_button
	tmp_arrray.splice(tmp_arrray.findIndex(item => item.id === value_to_delete), 1);
	
	
	localStorage.setItem('sitedata',JSON.stringify(tmp_arrray));
	// alert(1)
	location.reload();

}



function clicked_edit_this_block(id_from_button)
{
		//Find index of specific object using findIndex method. 
		// alert(id_from_button)
		objIndex = myArray.findIndex((obj => obj.id == id_from_button));

		// alert(myArray[objIndex].name)
		document.getElementById("input_update_data").innerHTML = '<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+ '<center><strong><label>Change Name</label></strong></center><input placeholder="Type name" type="text" class="form-control" id="'+myArray[objIndex].id+'"">' +'<br><button type="submit" class="btn btn-success" style="width:100%" id="'+myArray[objIndex].id+'" onclick="update_button(this.id)">Update</button>' + '</div></div></div></div>';
}

function update_button(id_from_input_button)
{
	objIndex = myArray.findIndex((obj => obj.id == id_from_input_button));

	// alert(id_from_input_button)

	var name_by_user = document.getElementById(myArray[objIndex].id).value
	// alert(name_by_user)
	if(name_by_user == "")
	{
		alert("Empty Name")
	}
	else
	{
		// alert(name_by_user)

		//change the name using id_from_input_button_varaible

		
		myArray[objIndex].name = name_by_user;
		// myArray[objIndex].id = name_by_user;
		localStorage.setItem('sitedata',JSON.stringify(myArray));

		location.reload();

	}
}
