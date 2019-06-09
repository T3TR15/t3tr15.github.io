# t3tr15.github.io
A Tetris variant made by two New York bois. What more is there to say? Quite a bit, actually...

# Key binding
Key binding for tetriminos is based off of those found in Tetris Friends (see https://i.redd.it/5yj1ehsbxfu21.png), with additional WASD keys which correspond to the arrow keys. However, there are also additional keyboard controls that customize the overall user experience, which are covered below.

# VFX settings
* U - Minimal VFX. Turns off particles and rotation of the screen.
* I - Low VFX. No particles, but screen rotates based on the keys you press.
* O - Medium VFX. Low VFX + basic particles.
* P - Maximum VFX. A combination of basic particles and text, which displays your combo and follows the basic particles.

# Rotation
This variant of Tetris allows you to rotate your tetriminos at custom angles. (Highly not recommended, but a feature anyways.)
* Q - Subtracts 45 degrees from the angle that the tetrimino is being rotated (default is 90 degrees, minimum is 45 degrees).
* E - Adds 45 degrees to the angle that the tetrimino is being rotated (maximum is 180 degrees).

# Restarting the game
Although the game auto-detects if the board is full and starts a new game immediately, you can still reset your board and tetrimonos by pressing R.

# Potential errors
Although a solution to the back-end code of each error listed here is possible, it's easier for us developers to inform you of these errors in order to minimize any suprises. With that clarification, let us do so.
* Sometimes, you cannot rotate tetriminos on the extreme sides of the board. This is due to the way the board is set up (JavaScript arrays), and rotating the tetrimino would break the array's dimensions.
* Occasionally, the board will flash, and (in extremely rare cases) leave full lines uncleared. However, the javascript.js file should rectify such errors on the board by itself. Apologies in advance if such errors ruin experiences of T3TR15 in competitive contexts.

# Liability
The developers of T3TR15 are not responsible for any damages, including physical and psychological, to any animate or inanimate objects as a result of an unfavorable T3TR15 experience.

# Copyright concerns
The developers of T3TR15 do not own anything related to the registered trademark of Tetris. This Tetris variant was made only for educational purposes.

# That's all there is.
Now head on over to https://T3TR15.github.io and enjoy! Please report any bugs (not including those mentioned under the "Potential errors" heading) by emailing T3TR15.github.io@gmail.com.
