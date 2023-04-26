const kazzara = {
    name: "카자라",
    age: 1
}

const molgoth = {
    name: "몰고스",
    age: 2
}

const bossList = [kazzara, molgoth]

function keyboard(props) {

    const index = props
    console.log(bossList[index].name)
}

keyboard(0)