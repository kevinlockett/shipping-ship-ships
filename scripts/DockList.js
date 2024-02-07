import { getDocks, getHaulers } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        /* Your job is to design an algorithm and implement it */
        
        if (itemClicked.dataset.type === "dock") {

            // Get the id of the hauler clicked
            const dockId = itemClicked.dataset.id

            // Start a counter variable at 0
            let haulerCounter = 0
            let haulers = []

            // Iterate all of the shipping ships
            const allHaulers = getHaulers()
            for (const hauler of allHaulers) {
                
                // Does the haulerId foreign key match the id?
                if (hauler.dockId === parseInt(dockId)) {
                    
                    // Increase the counter by 1
                    haulerCounter++
                    haulers.push(hauler)
                }
            }

            //If there is no hauler at the dock, present the following message.
            //The Shanghai, China dock is currently unloading nothing
            const hauler = haulers.map((hauler) => hauler.name)

            if (haulerCounter === 0) {

                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading nothing.`)

                //When a dock is clicked, present a message to the user that follows the format below if a hauler is currently at that dock.
                //The Shanghai, China dock is currently unloading Boaty McBoatface

                //If there is more than one hauler at the dock, present the following message.
                //The Shanghai, China dock is currently unloading Boaty McBoatface, Seawise Giant
            } else {
                
                window.alert(`The ${itemClicked.dataset.location} dock is currently unloading ${hauler.join(', ')}.`)

            }

        }
    }
)

export const DockList = () => {
    const docks = getDocks()
    docks.sort(function (a, b) {
        if (a.location < b.location) {
            return -1
        }
        if (a.location > b.location) {
            return 1
        }
        return 0
    })

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
            <li data-id="${dock.id}" 
                data-location="${dock.location}" 
                data-volume="${dock.volume}" 
                data-type="dock" >
                ${dock.location} can hold ${dock.volume} million tons of cargo.
            </li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}