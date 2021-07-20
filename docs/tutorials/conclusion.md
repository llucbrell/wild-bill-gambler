
# Exercise conclusion and refections

## Times and general impression

I think, I've expended too much time learning new things (framworks and tools) and setting the environment than writting code. Next time It'd be good to start building the game. The visual result would be better.

## Good impressions working with Phaser

I've never worked with Phaser framework before. After building this simple game, I've got a good impression of this library. It's plenty of useful methods and good practices. It's very easy to build some game iteratively without breaking everything. 

## Webpack it's a bad idea

I think that webpack it's an impresive tool, but has a steep learning curve. Not good to apply if you have not much time. My computer was slow down by the watch and I've finished the exercise using http-server module instead.

## Be carefull with Global objects

I think it's important for security, to build a system to handle shared global objets between scenes. I think this is important, because it's very simple to hack the game and change, scores and more. I think a possible solution is to build JWTs (JSON Web Tokens) and send and check them between scenes. But it's only an idea, I didn't check it.