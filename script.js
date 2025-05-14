function stringChop(str, size) {
	let out=[]
	let string=''
  for(let i=1;i<=str.length;i++){
	  
	  
	  if(i%size===0){
		  string+=str[i-1]
		   console.log(string,' ki')
		  out.push(string)
		  //return
		  string='' 
	  }else if(i===str.length){

	string+=str[i-1]
	out.push(string)
	  }else{ 
	      	string+=str[i-1]
	  } 
   }
   return out 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
