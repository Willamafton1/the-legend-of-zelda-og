scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(136, 136))
    tiles.setCurrentTilemap(tilemap`the level`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`link walk up`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(32, 33))
    tiles.setCurrentTilemap(tilemap`old man cave`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`link`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walking link`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`old mans wooden sword`, function (sprite, location) {
    game.showLongText("Its dangerous to go alone here take this!", DialogLayout.Bottom)
    pause(1000)
    tiles.setCurrentTilemap(tilemap`old man cave0`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`right standing link`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`left standing link`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`walking link2`,
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`link looking up 1`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`link walk down`,
    200,
    true
    )
})
info.onLifeZero(function () {
    music.setVolume(255)
})
let mySprite: Sprite = null
info.setScore(3)
tiles.setCurrentTilemap(tilemap`the level`)
mySprite = sprites.create(assets.image`link`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(138, 137))
forever(function () {
    if (controller.A.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`link walk up`,
        200,
        false
        )
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
