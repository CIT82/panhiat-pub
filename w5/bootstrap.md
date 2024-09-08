# Bootstrap

## The grid system of bootstrap

Creating grid system is important for bootstrap because It organized your layout to fit different type of device. 

There are about 12 columns. 

To start, we need to create a container, essentially a box that contains rows and columns. 
>     
    <div class="container">

The next step is creating two  nested div row and column.  
>  
    <div class="container">  
        <div class="row">
            <div class="col"></div>
        </div>
    <div>


if you want space between the column and row, the attribute are 

> 
    g stands for gap
    gy stands for the y-axis gap
    gx- stands for the x-axis gap

Offset is when you want to move the columns. to the right. To offset a column the attribute is 

> 
    offset-(the number of columns)

Breakpoint

Breakpoint is where you want to change the layout on certain type of device such as large, extra large or small device. By identifying the breakpoint, it helps define the different grid style you want. 