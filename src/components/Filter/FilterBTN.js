import React from 'react'

const FilterBTN = () => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="btn btn-outline-primary" for="flexRadioDefault1">Gasolina 95 E5</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="btn btn-outline-primary" for="flexRadioDefault2">Gasolina 98 E5</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                <label className="btn btn-outline-primary" for="flexRadioDefault3">Gasoleo A</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked />
                <label className="btn btn-outline-primary" for="flexRadioDefault4">Gasoleo Premium</label>
            </div>
        </div>
    )
}

export default FilterBTN