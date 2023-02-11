const numberOfCountries = document.getElementById("numberOfCountries")
numberOfCountries.innerText = `Total number of countries are ${countries_data.length}`

const countriesName = []
countries_data.map((ele) => {
    countriesName.push(ele.name.toUpperCase())
})

const countryCardContainer = document.getElementById("countryCardContainer")
// function reverse(){
    for (let i = 0; i < countriesName.length; i++) {
        countryCardContainer.innerHTML += `
                <div class="inner">
                    <p>${countriesName[i]}</p>
                </div>
                `
    }

// }

function reverse() {
    countryCardContainer.innerHTML = ""

    console.log("sort");
    for (let i = countriesName.length - 1; i >= 0; i--) {
        countryCardContainer.innerHTML += `
                    <div class="inner">
                        <p>${countriesName[i]}</p>
                    </div>
                    `
    }
}


function startingSearch() {
    const input = document.getElementById("countryName").value
    const matchedCountries = []
    countryCardContainer.innerHTML = ""
    for (let i = 0; i < countriesName.length; i++) {
        const hello = countriesName[i].startsWith(input.toUpperCase())
        // console.log(hello);
        if (hello) {
            matchedCountries.push(countriesName[i])
            countryCardContainer.innerHTML += `
            <div class="inner">
                <p>${countriesName[i]}</p>
            </div>
            `
        }
        // console.log(matchedCountries);
        const numberOfSearchResults = document.getElementById("numberOfSearchResults")
        numberOfSearchResults.innerText = `Number of countries starting with "${input}" are ${matchedCountries.length}`
    }
}

function searchAny() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    // console.log(countryCardContainer);
    const inputElement = document.getElementById("countryName")
    inputElement.setAttribute("onkeyup", "searchAny()")

    const input = document.getElementById("countryName").value
    const matchedCountries = []
    countryCardContainer.innerHTML = ""
    for (let i = 0; i < countriesName.length; i++) {
        const hello = countriesName[i].includes(input.toUpperCase())
        // console.log(hello);
        if (hello) {
            matchedCountries.push(countriesName[i])
            countryCardContainer.innerHTML += `
            <div class="inner">
                <p>${countriesName[i]}</p>
            </div>
            `
        }
        // console.log(matchedCountries);
        const numberOfSearchResults = document.getElementById("numberOfSearchResults")
        numberOfSearchResults.innerText = `Number of countries includes  "${input}" are ${matchedCountries.length}`
    }

}