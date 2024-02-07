import { getDocks } from "./database.js"

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
            <li data-id="${dock.id}" 
                data-location="${dock.location}" 
                data-volume="${dock.volume}" 
                data-type="docks" >
                ${dock.location} can hold ${dock.volume} million tons of cargo.
            </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}