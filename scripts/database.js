const database = {
    docks: [{
        id: 1,
        location: "Shanghai, China",
        volume: "43.5"
    }, {
        id: 2,
        location: "Busan, South Korea",
        volume: "21.6"
    }, {
        id: 3,
        location: "Rotterdam, The Netherlands",
        volume: "14.35"
    }, {
        id: 4,
        location: "Antwerp, Belgium",
        volume: "12.04"
    }],
    haulers: [{
        id: 1,
        name: "Blue Marlin",
        dockId: 2
    }, {
        id: 2,
        name: "Mauve Macrocephalus",
        dockId: 3
    }, {
        id: 3,
        name: "Bronze Bakunawa",
        dockId: 3
    }, {
        id: 4,
        name: "Crimson Kraken",
        dockId: 4
    }, {
        id: 5,
        name: "Lithium Leviathon",
        dockId: 4
    }, {
        id: 6,
        name: "Jacaranda Jörmungandr",
        dockId: 4
    }, {
        id: 7,
        name: "Heliotrope Hafgufa",
        dockId: 4
    }],
    shippingShips: [{
        id: 1,
        name: "Global Discoverer",
        haulerId: 1
    }, {
        id: 2,
        name: "Grey Heron",
        haulerId: 2
    }, {
        id: 3,
        name: "Donna Paizon",
        haulerId: 3
    }, {
        id: 4,
        name: "Queen Alice's Regrets",
        haulerId: 4
    }, {
        id: 5,
        name: "Vassup",
        haulerId: 5
    }, {
        id: 6,
        name: "Loosetantric",
        haulerId: 6
    }, {
        id: 7,
        name: "Edward Fitzwilly",
        haulerId: 7
    }, {
        id: 8,
        name: "Astoneya",
        haulerId: 7
    }, {
        id: 9,
        name: "Murica",
        haulerId: 6
    }, {
        id: 10,
        name: "Broomsteaks",
        haulerId: 5
    }, {
        id: 11,
        name: "Dametreeos",
        haulerId: 4
    }, {
        id: 12,
        name: "Andrew Diarrhea",
        haulerId: 3
    }, {
        id: 13,
        name: "Willy Gutslost",
        haulerId: 2
    }, {
        id: 14,
        name: "Mistress of Murfreesborough",
        haulerId: 1
    }, {
        id: 15,
        name: "Santa Mario",
        haulerId: 2
    }, {
        id: 16,
        name: "Thornygloom",
        haulerId: 3
    }, {
        id: 17,
        name: "Jellyfilled",
        haulerId: 4
    }, {
        id: 18,
        name: "Edwardo Bologna",
        haulerId: 5
    }, {
        id: 19,
        name: "Sanktuna",
        haulerId: 6
    }, {
        id: 20,
        name: "Irrepublica",
        haulerId: 7
    }]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}