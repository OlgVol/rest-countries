import React, {useEffect} from 'react'

 const Filter = () => {
    window.addEventListener('DOMContentLoaded', () => {
const search = document.getElementById('search')

search.addEventListener('input', (e) => {
    const { value } =e.target

    const countryName = document.querySelectorAll('.country-name')

    countryName.forEach((name) => {
        if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
name.parentElement.parentElement.style.display= 'block'
        } else {
            name.parentElement.parentElement.style.display = 'none'
        }
    })
    })
}) 

return (
<section className = "filter">
<form className="form-control">
<input type="search" name="search" id="search"
placeholder="search for a country" />
</form>
<div className="region-filter">
<select name="select" id="select" className="select">
<option value="Filter by region">Filter by Region</option>
<option value="smaller than Lithuania">Smaller than Lithuania</option>
<option value="Oceania region">Oceania Region</option>
</select>
</div>
</section>
)
}
export default Filter