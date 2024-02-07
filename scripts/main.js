import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { ShipList } from "./ShipList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <div class="title">
        <section class="title__container">
            <img src="./img/shipping-ship.png" alt="Our first shipping ship cargo ship to ship cargo" />
            <h1>Shipping Ship Ships</h1>
        </section>
    </div>
    <article class="details">
        <section class="detail--column list details__docks">
            <h2>Docks</h2>
            ${DockList()}
        </section>
        <section class="detail--column list details__haulers">
            <h2>Hauling Ships</h2>
            ${HaulerList()}
        </section>
        <section class="detail--column list details__ships">
            <h2>Shipping Ships</h2>
            ${ShipList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML