# Avatar Creator
### Live Demo: https://gloyens.github.io/avatar-creator/

## What is this project?
This is a simple character creator allowing people to create their own customised profile pictures.

## Aim
A recent client required a couple of images in this particular style; while making an entire program to allow for full customisation was probably overkill, I saw it more as an interesting opportunity to practice my JavaScript skills. I had already made a similar program in Godot, so conceptually it wasn't particularly difficult to create, but nonetheless it was a good experience with a fun result.

## How it works
The program is based around an HTML `<canvas>` element. Every customisable object - hair, eyes, mouth, et cetera - exists on a separate layer with its own image source; for example, the second hair object would be accessed at `img/hair2.png`. This makes it very easy to cycle through images - only the number needs to be changed. All the images are then drawn to the canvas in the correct order.

One small wrinkle is that some images need to change based on the character's skin colour (the cheeks, for example, or the shadow under the nose). In this case, each element has a variant for each skin colour. The first nose element paired with a yellow skin colour would be accessed at `img/nose1-6.png`, where `6` is the skin colour reference. 

Finally, the Save Image button works by creating an `<a>` tag with a link to download the `<canvas>` data, clicking it through code, then deleting the `<a>` tag. There is almost certainly a less roundabout way of doing this, but for now it functions well.

## Future Plans
I wanted to release this in a state where it would be useful from the start; as such, there is no pressing need to update this project. If I did, it would be to include new graphics.

It would be convenient, however, to implement a full inventory system where each element is visible and accessible through tabs. Making full-body images rather than just character heads would also be interesting, as the images could be used as the basis for a player character in a simple game. I didn't go down this route due to the client's requirements and because I wanted to avoid scope creep, but it could make for a fun future project.

### Known Issues
- When looping from the last image to the first in a set (or vice-versa), the number of images must be entered manually - e.g., `when Next button is pressed, if current image is 10, go to image 1`. It would be useful for the code to automatically find the number of items in the set, so that when new images are added, the code does not need to be updated.
- Images are not preloaded, so the program is fairly slow on first use.
