function generate(res_x, res_y, start_x, end_x, start_y){

	var canvas = document.getElementById("paper");
	canvas.width = res_x;
	canvas.height = res_y;
	var c = canvas.getContext("2d");	

	//specify Mandelbrot section here
	var x_start = start_x;
	var x_end = end_x;

	//y-parameters are chosen to start at start_y and adhere to aspect ratio defined by resolution
	var y_section = (x_end-x_start)*(res_y/res_x);
	var y_start = start_y;
	var y_end = start_y + y_section;

	var dx = (x_end - x_start)/res_x;
	var dy = (y_end - y_start)/res_y;

	//variables for calculation of set
	//maximum for number of iterations
	var maxiter = 40;

	//position of pixel
	var x;
	var y;

	//real and imag part of z0
	var e;
	var f;

	//precise and rounded distance variable
	var j;
	var k;

	//flag which is true, if pixel is in Mandelbrot set
	var inset = true;
	
	for(a = 0; a < res_x + 1; a = a + 1){
		for(b = 0; b < res_y + 1; b = b + 1){
			
			//initialization of z0
			e = 0;
			f = 0;

			//initialization of inset flag
			inset = true;
			
			for(i = 0; i < maxiter; i++){
			
				//update of z
				x = e*e - f*f + (a*dx + x_start);
				y = 2*e*f + (b*dy + y_start);
				
				e = x;
				f = y;

				j = (x*x) + (y*y)
				
				if(j > 4)
				{
					inset = false;
					break;
				}
				
			}

			//rounded distance variable for classification below
			k = Math.round(j);

			//color pixel black if contained in Mandelbrot set
			if(inset){c.fillStyle = 'black';}
			
			//color pixel shades of grey if not contained in Mandelbrot set, depending on speed of divergence
			if(!inset){

				if(i > 1){c.fillStyle = 'rgb(0,0,0)'}
				if(i > 2){c.fillStyle = 'rgb(20,20,20)'}
				if(i > 3){c.fillStyle = 'rgb(50,50,50)'}
				if(i > 5){c.fillStyle = 'rgb(80,80,80)'}
				if(i > 10){c.fillStyle = 'rgb(100,100,100)'}
				if(i > 15){c.fillStyle = 'rgb(150,150,150)'}
				if(i > 20){c.fillStyle = 'rgb(200,200,200)'}
				if(i > 40){c.fillStyle = 'rgb(255,255,255)'}

			}
			
			c.fillRect(a,b,1,1);
			
		}
		
	}

}