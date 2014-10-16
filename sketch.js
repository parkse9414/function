function setup()
{
	createCanvas(800,800)
}

function draw()
{
	background(0);
	fill(255)
	ellipse(mouseX, mouseY, 100, 100)

    drawDonut1(248, 181, 81, 100,100);
    drawDonut1(128, 194, 105, 300,100);
    drawDonut1(126, 206, 244, 400,200);
    drawDonut1(255, 125, 140, 500,300);

}

function drawDonut1(r, g, b, x, y)
{
	//도넛1
    fill(r, g, b, 255)
	ellipse(x, y, 200, 200)
    fill(0)
	ellipse(x, y, 120, 120)
}
