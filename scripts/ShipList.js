import { getShips, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerforeignkey
            
            // Define a default object for the found hauler
            let haulingShip = { name: "" }
            
            // Iterate the array of hauler objects
            const haulers = getHaulers()
            for (haulingShip of haulers) {
   
                // Does the haulerId foreign key match the id of the current hauler?
                if (haulingShip.id === parseInt(haulerId)) {
                
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = haulingShip
                
                    // Show an alert to the user with this format...
                    window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
                }
            }
        }
    }
)

export const ShipList = () => {
    const ships = getShips()
    ships.sort(function (a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
    
    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `
            <li data-id="${ship.id}" 
                data-name="${ship.name}" 
                data-haulerForeignKey="${ship.haulerId}" 
                data-type="shippingShip" >
                ${ship.name}
            </li>
        `
    }

    shipsHTML += "</ul>"

    return shipsHTML
}