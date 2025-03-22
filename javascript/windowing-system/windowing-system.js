// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width
    this.height = height
}

Size.prototype.resize = function (width, height) {
    this.width = width
    this.height = height
}

export function Position(x = 0, y = 0) {
    this.x = x
    this.y = y
}

Position.prototype.move = function (x, y) {
    this.x = x
    this.y = y
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600)
        this.size = new Size()
        this.position = new Position()
    }

    resize(size) {
        const maxWidth = this.screenSize.width - this.position.x
        const maxHeight = this.screenSize.height - this.position.y

        const width = size.width < maxWidth ? size.width : maxWidth
        const height = size.height < maxHeight ? size.height : maxHeight

        this.size.resize(Math.max(width, 1), Math.max(height, 1))
    }

    move(position) {
        const maxX = this.screenSize.width - this.size.width
        const maxY = this.screenSize.height - this.size.height

        const x = position.x < maxX ? position.x : maxX
        const y = position.y < maxY ? position.y : maxY

        this.position.move(Math.max(0, x), Math.max(0, y))
    }
}

export const changeWindow = (programWindow) => {
    programWindow.resize(new Size(400, 300))
    programWindow.move(new Position(100, 150))

    return programWindow
}