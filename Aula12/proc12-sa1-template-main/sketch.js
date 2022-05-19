var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);

  for(var i=0;i<=9; i++){
    if(marks[i]>=45){
      console.log("Aprovado "+marks[i])
    }
  }
  
  console.log(marks)
}

function draw() 
{
  background(30);
}

 

