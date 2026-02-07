# Mandelbrot generator

This project is a simple renderer for the Mandelbrot-set.

It contains the logic in a javascript file and gets called by a simple html-script in which all parameters can easily specified.

## Parameters and Execution

The wanted resolution can be specified in the html-file.

The section to be rendered can be specified fully in x-direction (x_start and x_end). The start of the y-section can be specified (y_start) and y_end is calculated such that the aspect ratio defined by the specified resolution is respected.

Per default, the full mandelbrot set is rendered on a 1920x1080 canvas. The section in x-direction is set to -2.8 to 1.5. The start of the y-section is chosen such that the set is symmetric to the x-axis. This is done by calculating the section in y-direction which corresponds to the aspect ratio

$$
(1.5 - (-2.8)) * (1080 / 1920)
$$

and splitting it in half.

To render the mandelbrot-set, load the html-file from the folder which contains both the html- and javascript-files and the Mandelbrot-set will render with the chosen parameters.