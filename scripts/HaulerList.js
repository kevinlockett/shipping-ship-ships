import { getHaulers, getShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {

            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0

            // Iterate all of the shipping ships
            const shippingShips = getShips()
            for (const ship of shippingShips) {
                
                // Does the haulerId foreign key match the id?
                if (ship.haulerId === parseInt(haulerId)) {
                    
                    // Increase the counter by 1
                    shipCounter++
                    
                }
            }
            window.alert(`${itemClicked.dataset.name} is carrying ${shipCounter} Shipping Ships`)
        }
    }
)

export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-name="${hauler.name}" data-dockForeignKey="${hauler.dockId}" data-type="hauler" >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}