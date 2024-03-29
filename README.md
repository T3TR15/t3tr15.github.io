# What is T3TR15?
T3TR15 is a Tetris variant made by two New York bois. What more is there to say?<br>
Quite a bit, actually.<br>
Please read this document in its entirety in order to be well-informed of the mechanics of this Tetris variant. Any potential "surpises" from your T3TR15 experience may be a result of your lack of willingness to do so.
# Page setup
There is text above the board. It includes (in the following order) your score, your current combo, your highest combo, the degree of which you're rotating your tetrimino, the current VFX settings, and the status of the game (ongoing or paused). Game status and VFX settings are also displayed in the page's title.
# Tetriminos
If you choose to poke around in the index.html file, you may notice additional tetriminos listed as comments. These tetriminos were originally supposed to be in T3TR15, but would ruin the user experience. However, the only exception to this rule is the "onesquare" piece, which only takes up one space and is therefore viable as a custom tetrimino.
# Key binding
Key binding for moving and rotating tetriminos is based off of [those found in Tetris Friends](https://i.redd.it/5yj1ehsbxfu21.png), with additional WASD keys which correspond to the arrow keys. However, there are also additional keyboard controls that customize the overall user experience, which are covered below.
## VFX settings
You can change VFX settings at any time. Below are the keys:
* U - Minimal VFX. Turns off particles and rotation of the screen.
* I - Low VFX. No particles, but screen rotates based on the keys you press.
* O - Medium VFX. Low VFX + basic particles.
* P - Maximum VFX. A combination of basic particles and text, which displays your current combo and follows the basic particles.
## Rotation
This Tetris variant allows you to rotate your tetriminos at custom angles. (Highly not recommended, but a feature anyways.) For user convenience, changing the rotation freezes the piece mid-air (but does not pause the game entirely).
* Q - Subtracts 45 degrees from the angle that the tetrimino is being rotated (default is 90 degrees, minimum is 45 degrees).
* E - Adds 45 degrees to the angle that the tetrimino is being rotated (maximum is 180 degrees).
## Pausing the game
To support users playing on iPad Pros using the Smart Keyboard Folio and MacBook Pro users with the Touch Bar, the backquote key (immediately below the Escape key on most keyboards) can also pause the game.
## Restarting the game
Although the game auto-detects if the board is full and starts a new game immediately, you can still reset your board and tetrimonos by pressing R. For legitmacy reasons, you can only reset when the game is not paused.
# Potential error(s)
Although a solution to the back-end code of each error listed here is possible, it's easier for us developers to inform you of these errors in order to minimize any suprises. With that clarification, let us do so.
* You cannot rotate tetriminos on the extreme sides of the board. This is due to the setup of the board (JavaScript arrays), and rotating the tetrimino would break the array's dimensions.
# Liability
The developers of T3TR15 are not responsible for any damages, including physical and psychological, to any animate or inanimate objects as a result of accessing and/or interacting with T3TR15.
# Copyright concerns
The developers of T3TR15 do not own anything related to the registered trademark of Tetris. This Tetris variant was made only for educational purposes.
# That's all for now.
Now head on over to https://T3TR15.github.io and enjoy! Please report any bugs (not including those mentioned under the "Potential error(s)" heading) by emailing T3TR15.github.io@gmail.com.
# Made with love from JL and SZ. :heart:
