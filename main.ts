control.onEvent(EventBusSource.MES_BROADCAST_GENERAL_ID, EventBusValue.MES_DEVICE_DISPLAY_ON, function () {

})
game.setScore(5000)
basic.forever(function () {
    let sprite: game.LedSprite = null
    sprite.set(LedSpriteProperty.X, 5000)
})
