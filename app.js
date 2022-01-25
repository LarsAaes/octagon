let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let canvasheight = 400;
let canvaslenght = 400;
let cellsize = 50;


function GenerateGrid()
{

    for(i=0; i<=canvasheight; i=i+cellsize)
    {
        //draws points (middle 3 on x and y axis)
        for(j=cellsize*3; j<=cellsize*5; j=j+cellsize)
        {
        ctx.fillRect(j,i,3,3)
        ctx.fillRect(i,j,3,3)
        }

    }

    for(i=cellsize*1; i<=canvasheight-cellsize*1; i=i+cellsize)
    {
          //draws points (around middle)
          for(k=cellsize*2; k<=cellsize*6; k=k+cellsize)
          {
          ctx.fillRect(k,i,3,3)
          ctx.fillRect(i,k,3,3)
          }
    }

}

function DrawOuterLines()
{

    ctx.lineWidth = 3;
    ctx.strokeStyle="black";

     //Draws outer lines
     ctx.beginPath()
     ctx.moveTo(1.5+cellsize*3,1.5);
     ctx.lineTo(1.5+cellsize*5,1.5);
     ctx.stroke();

     ctx.beginPath()
     ctx.moveTo(1.5,1.5+cellsize*3);
     ctx.lineTo(1.5,1.5+cellsize*5);
     ctx.stroke();
 
     ctx.beginPath()
     ctx.moveTo(1.5+cellsize*3,1.5+canvasheight);
     ctx.lineTo(1.5+cellsize*5,1.5+canvaslenght);
     ctx.stroke();
 
     ctx.beginPath()
     ctx.moveTo(1.5+canvasheight,1.5+cellsize*3);
     ctx.lineTo(1.5+canvaslenght,1.5+cellsize*5);
     ctx.stroke();
 
     ctx.beginPath()
     ctx.moveTo(1.5,1.5+cellsize*3);
     ctx.lineTo(1.5+cellsize*3,1.5);
     ctx.stroke();
 
     ctx.beginPath()
     ctx.moveTo(1.5,1.5+cellsize*5);
     ctx.lineTo(1.5+cellsize*3,1.5+canvaslenght);
     ctx.stroke();

     ctx.beginPath()
     ctx.moveTo(1.5+cellsize*5,1.5);
     ctx.lineTo(1.5+canvaslenght,1.5+cellsize*3);
     ctx.stroke();

     ctx.beginPath()
     ctx.moveTo(1.5+canvaslenght,1.5+cellsize*5);
     ctx.lineTo(1.5+cellsize*5,1.5+canvaslenght);
     ctx.stroke();
     
}

function DrawInnerLeftLines()
{   

  

    //Linje 1
    
    for(i=4 , j=1; i<=0, j<=5; i=i-1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
    }
    
    //Linje 2

    for(i=5 , j=1; i<=0, j<=5; i=i-1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
    }

    //Linje 3

    for(i=5.5 , j=1.5; i<=0, j<=6; i=i-1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);

    }

    //Linje 4
    
    for(i=6 , j=2; i<=0, j<=6; i=i-1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);

    }

      //Linje 5
    
      for(i=6.5 , j=2.5; i<=0, j<=7; i=i-1, j=j+1)
      {
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
  
      }

    //Linje 6
    
      for(i=7 , j=3; i<=0, j<=7; i=i-1, j=j+1)
      {
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
  
      }

    //Linje 7
    
      for(i=7.5 , j=3.5; i<=0, j<=8; i=i-1, j=j+1)
      {
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
      }
    
      //Linje 8
    
      for(i=8 , j=4; i<=0, j<=8; i=i-1, j=j+1)
      {
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
      }

      
      //Linje 9
    
      for(i=8.5 , j=4.5; i<=0, j<=9; i=i-1, j=j+1)
      {
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.lineTo(1.5+cellsize*(i-1),1.5+cellsize*j);
      }

      ctx.lineWidth = 1;
      ctx.strokeStyle="black";
      ctx.stroke();
}

function DrawInnerRightLines()
{   

    //Linje 1
    
    for(i=4 , j=1; i<=0, j<=5; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
    }

     //Linje 2
    
     for(i=3 , j=1; i<=0, j<=5; i=i+1, j=j+1)
     {
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
     }

    //Linje 3
    
     for(i=2.5 , j=1.5; i<=0, j<=6; i=i+1, j=j+1)
     {
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
 
     }
    
    //Linje 4
    
     for(i=2 , j=2; i<=0, j<=6; i=i+1, j=j+1)
     {
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
 
     }

    //Linje 5
    
    for(i=1.5 , j=2.5; i<=0, j<=7; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
    }

    //Linje 6
    
    for(i=1 , j=3; i<=0, j<=7; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
    }

    //Linje 7
    
    for(i=0.5 , j=3.5; i<=0, j<=8; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
    }

    
    //Linje 8
    
    for(i=0 , j=4; i<=0, j<=8; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);
    }

    
    //Linje 9
    
    for(i=-0.5 , j=4.5; i<=0, j<=9; i=i+1, j=j+1)
    {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.lineTo(1.5+cellsize*(i+1),1.5+cellsize*j);

    }

    ctx.lineWidth = 1;
    ctx.strokeStyle="black";
    ctx.stroke();
}

function Clear()
{
    ctx.clearRect(0, 0, canvasheight+3, canvaslenght+3)
}

function BendLinesRight()
{
    //Linje 1 - mod højre

    for(i=4 , j=1; i<=0, j<=5; i=i-1, j=j+1)
    {   
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
    }

    //Linje 2 - mod højre

    for(i=5 , j=1; i<=0, j<=5; i=i-1, j=j+1)
    {
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
    }

    //Linje 3 - mod højre

    for(i=5 , j=2; i<=0, j<=5; i=i-1, j=j+1)
    {
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
    }
    
    //Linje 4 - mod højre

    for(i=6 , j=2; i<=0, j<=6; i=i-1, j=j+1)
    {
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
    }

    //Linje 5 - mod højre

    for(i=6 , j=3; i<=0, j<=6; i=i-1, j=j+1)
    {
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
    }

     //Linje 6 - mod højre

     for(i=7 , j=3; i<=0, j<=7; i=i-1, j=j+1)
     {
         rando = Math.floor(Math.random() * 100)/100 
 
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
     }

    //Linje 7 - mod højre

     for(i=7 , j=4; i<=0, j<=7; i=i-1, j=j+1)
     {
         rando = Math.floor(Math.random() * 100)/100 
 
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
     }

     //Linje 8 - mod højre

     for(i=8 , j=4; i<=0, j<=8; i=i-1, j=j+1)
     {
         rando = Math.floor(Math.random() * 100)/100 
 
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
     }

     //Linje 9 - mod højre

     for(i=8 , j=5; i<=0, j<=8; i=i-1, j=j+1)
     {
         rando = Math.floor(Math.random() * 100)/100 
 
         ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
         ctx.bezierCurveTo(1.5+cellsize*(i-rando),1.5+cellsize*(j-rando),1.5+cellsize*(i-rando),1.5+cellsize*j,1.5+cellsize*(i-1),1.5+cellsize*j);
     }

     // endestykker top - mod højre

     for(i=5 , j=1; i<=0, j<=8; i=i+1, j=j+1)
     {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*j);
        ctx.bezierCurveTo(1.5+cellsize*(i),1.5+cellsize*(j),1.5+cellsize*(i+0.5),1.5+cellsize*j,1.5+cellsize*(i+0.5),1.5+cellsize*(j-0.5));
     }

    // endestykker bund - mod højre

    for(i=0.5 , j=5.5; i<=0, j<=8; i=i+1, j=j+1)
     {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*j);
        ctx.bezierCurveTo(1.5+cellsize*(i),1.5+cellsize*(j),1.5+cellsize*(i+0.5),1.5+cellsize*j,1.5+cellsize*(i+0.5),1.5+cellsize*(j-0.5));
     }
    

    ctx.lineWidth = 1;
    ctx.strokeStyle="black";
    ctx.stroke();

}

function BendLinesLeft()
{
    //Linje 1 - mod venstre

    for(i=4 , j=1; i<=0, j<=4; i=i+1, j=j+1)
    {   
        rando = Math.floor(Math.random() * 100)/100 

        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
        ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
    }

      //Linje 2 - mod venstre

      for(i=3 , j=1; i<=0, j<=5; i=i+1, j=j+1)
      {   
          rando = Math.floor(Math.random() * 100)/100 
  
          ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
          ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
      }

       //Linje 3 - mod venstre

       for(i=3 , j=2; i<=0, j<=5; i=i+1, j=j+1)
       {   
           rando = Math.floor(Math.random() * 100)/100 
   
           ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
           ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
       }

        //Linje 4 - mod venstre

        for(i=2 , j=2; i<=0, j<=6; i=i+1, j=j+1)
        {   
            rando = Math.floor(Math.random() * 100)/100 
    
            ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
            ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
        }

        //Linje 5 - mod venstre

        for(i=2 , j=3; i<=0, j<=6; i=i+1, j=j+1)
        {   
            rando = Math.floor(Math.random() * 100)/100 
    
            ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
            ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
        }

        //Linje 6 - mod venstre

        for(i=1 , j=3; i<=0, j<=7; i=i+1, j=j+1)
        {   
            rando = Math.floor(Math.random() * 100)/100 
    
            ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
            ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
        }

        //Linje 7 - mod venstre

        for(i=1 , j=4; i<=0, j<=7; i=i+1, j=j+1)
        {   
            rando = Math.floor(Math.random() * 100)/100 
    
            ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
            ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
        }

        //Linje 8 - mod venstre

        for(i=0 , j=4; i<=0, j<=8; i=i+1, j=j+1)
        {   
            rando = Math.floor(Math.random() * 100)/100 
    
            ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
            ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
        }

         //Linje 9 - mod venstre

         for(i=0 , j=5; i<=0, j<=8; i=i+1, j=j+1)
         {   
             rando = Math.floor(Math.random() * 100)/100 
     
             ctx.moveTo(1.5+cellsize*i,1.5+cellsize*(j-1));
             ctx.bezierCurveTo(1.5+cellsize*(i+rando),1.5+cellsize*(j-rando),1.5+cellsize*(i+rando),1.5+cellsize*(j),1.5+cellsize*(i+1),1.5+cellsize*j);
         }

            // endestykker top - mod højre

        for(i=2.5 , j=0.5; i<=0, j<=8; i=i-1, j=j+1)
        {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*j);
        ctx.bezierCurveTo(1.5+cellsize*(i),1.5+cellsize*(j),1.5+cellsize*(i+0.5),1.5+cellsize*j,1.5+cellsize*(i+0.5),1.5+cellsize*(j+0.5));
        }

        // endestykker bund - mod højre

        for(i=7.5 , j=5.5; i<=0, j<=11; i=i-1, j=j+1)
        {
        ctx.moveTo(1.5+cellsize*i,1.5+cellsize*j);
        ctx.bezierCurveTo(1.5+cellsize*(i),1.5+cellsize*(j),1.5+cellsize*(i-0.5),1.5+cellsize*j,1.5+cellsize*(i-0.5),1.5+cellsize*(j-0.5));
        }

    ctx.lineWidth = 1;
    ctx.strokeStyle="black";
    ctx.stroke();
}

GenerateGrid();
setTimeout(DrawOuterLines,500);
setTimeout(DrawInnerLeftLines,1000);
setTimeout(DrawInnerRightLines,1500);
setTimeout(Clear,2500);
setTimeout(GenerateGrid,2500);
setTimeout(DrawOuterLines,2500);
setTimeout(BendLinesRight,3000);
setTimeout(BendLinesLeft,3500);









