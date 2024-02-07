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
        <section class="details__title">
            <h2>Shipping Ship Tracker</h2>
        </section>
        <section class="detail--column list details__docks">
            <h3>Docks</h3>
            ${DockList()}
        </section>
        <section class="detail--column list details__haulers">
            <h3>Hauling Ships</h3>
            ${HaulerList()}
        </section>
        <section class="detail--column list details__ships">
            <h3>Shipping Ships</h3>
            ${ShipList()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML