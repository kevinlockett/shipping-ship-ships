import { getHaulers } from "./database.js"

export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li data-id="${hauler.id}" data-name="${hauler.name}" data-dockForeignKey="${hauler.dockId}" data-type="haulers" >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}