
# Exercise conclusion and refections

## Times and general impression

I think, I've expended too much time learning new things (framworks and tools) and setting the environment than writting code. Next time It'd be good to start building the game. The visual result would be better and may be I can deploy the app as PWA too.

## Good impressions working with Phaser

I've never worked with Phaser framework before. After building this simple game, I've got a good impression of this library. It's plenty of useful methods and good practices. It's very easy to build some game iteratively without breaking everything. 

## Webpack was a bad idea

I think that webpack it's an impresive tool, but has a steep learning curve. Not good to apply if you have not much time. My computer was slow down by the watch and I've finished the exercise using http-server module instead.

## Development stack too heavy

The development stack used to build this app it's too much heavy for computers with not much resources. That's the reason why finally resolve to use http-server node module. This module, give me better performance than Webpack dev server.

## Be carefull with Global objects

I think it's important for security, to build a system to handle shared global objets between scenes. I think this is important, because it's very simple to hack the game and change, scores and more. I think a possible solution is to build JWTs (JSON Web Tokens) and send and check them between scenes. But it's only an idea, I didn't check it. 
JavaScript ES6 may be could resolve this with a better encapsulation, but I have to research it. 

## Must to use more ES6 or adopt TypeScript

The advantages of this 2 specifications can solve many future troubles. Both are a must not a may be. 
