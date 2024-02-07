import { getShips } from "./database.js"

export const ShipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-id="${ship.id}" data-name="${ship.name}" data-haulerforeignkey="${ship.haulerId}" data-type="ships" >${ship.name}</li>`
    }

    shipsHTML += "</ul>"

    return shipsHTML
}