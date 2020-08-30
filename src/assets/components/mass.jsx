import React, {useState} from 'react';
import { calculateMB } from '../js/m&b';

export default () => {
    //FH, FF, FT, EM, EMo, FS, RS, NB, CB, BE, SB, ShB, D1, D4, TOLM, TOLA
    const [FH, setFH] = useState('');
    const [FF, setFF] = useState('');
    const [FT, setFT] = useState('');
    const [EM, setEM] = useState('');
    const [EMo, setEMo] = useState('');
    const [FS, setFS] = useState('');
    const [RS, setRS] = useState('');
    const [NB, setNB] = useState('');
    const [CB, setCB] = useState('');
    const [BE, setBE] = useState('');
    const [SB, setSB] = useState('');
    const [ShB, setShB] = useState('');
    const [D1, setD1] = useState('');
    const [D4, setD4] = useState('');
    const [TOLM, setTOLM] = useState('');
    const [TOLA, setTOLA] = useState('');
    const [Res, setRES] = useState({});

    return (
        <header className="masthead bg-primary text-white text-center" id="massSection">
            <div className="container d-flex align-items-center flex-column">
                <h2 className="page-section-heading mb-0">MASS & BALANCE</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="pre-wrap masthead-subheading font-weight-light mb-0">DA42</p>
        
                <p className="pasa-paragraph">FUEL TYPE</p>
                <select required className="pasa-form-control dark" onChange={event => setFT(event.target.value)}>
                    <option className="pasa-option dark" value="" disabled selected hidden>SELECT</option>
                    <option className="pasa-option dark" value="0.8">Jet A1</option>
                    <option className="pasa-option dark" value="0.84">Diesel</option>
                </select>
                <p className="pasa-paragraph">FLIGHT HOURS</p>
                <input className="pasa-textfield dark" id="input-flightHours" type="number" placeholder="Decimal Time"  autocomplete="off" onChange={event => setFH(event.target.value)}/>
                <p className="pasa-paragraph">AVERAGE CONSUMPTION</p>
                <input className="pasa-textfield dark" id="input-consumption" type="number" placeholder="Litres per Hour"  autocomplete="off" onChange={event => setFF(event.target.value)}/>
                <p className="pasa-paragraph">TAKEOFF FUEL (Main Tanks)</p>
                <input className="pasa-textfield dark" id="input-TOFuelMain" type="number" placeholder="Litres"  autocomplete="off" onChange={event => setTOLM(event.target.value)}/>
                <p className="pasa-paragraph">TAKEOFF FUEL (Auxiliary Tanks)</p>
                <input className="pasa-textfield dark" id="input-TOFuelAux" type="number" placeholder="Litres"  autocomplete="off" onChange={event => setTOLA(event.target.value)}/>
                <p className="pasa-paragraph">DE-ICING FLUID @ 1m</p>
                <input className="pasa-textfield dark" id="input-DeIcing" type="number" placeholder="Litres"  autocomplete="off" onChange={event => setD1(event.target.value)}/>
                <p className="pasa-paragraph">DE-ICING FLUID @ 4.52m</p>
                <input className="pasa-textfield dark" id="input-DeIcing4" type="number" placeholder="Litres"  autocomplete="off" onChange={event => setD4(event.target.value)}/>
                
                <div class="row pasa-row">
                    <div class="col-lg-4 ml-auto pasa-column">
                        <p className="pasa-paragraph">EMPTY MASS</p>
                        <input className="pasa-textfield dark" id="input-emptyMass" type="number" placeholder="kg"  autocomplete="off" onChange={event => setEM(event.target.value)}/>
                        <p className="pasa-paragraph">FRONT SEATS</p>
                        <input className="pasa-textfield dark" id="input-frontSeats" type="number" placeholder="kg"  autocomplete="off" onChange={event => setFS(event.target.value)}/>
                        <p className="pasa-paragraph">REAR SEATS</p>
                        <input className="pasa-textfield dark" id="input-rearSeats" type="number" placeholder="kg"  autocomplete="off" onChange={event => setRS(event.target.value)}/>
                        <p className="pasa-paragraph">NOSE BAGGAGE</p>
                        <input className="pasa-textfield dark" id="input-noseBaggage" type="number" placeholder="kg"  autocomplete="off" onChange={event => setNB(event.target.value)}/>
                        <p className="pasa-paragraph">CABIN BAGGAGE</p>
                        <input className="pasa-textfield dark" id="input-cabinBaggage" type="number" placeholder="kg"  autocomplete="off" onChange={event => setCB(event.target.value)}/>
                        <p className="pasa-paragraph">BAGGAGE EXTENSION</p>
                        <input className="pasa-textfield dark" id="input-baggageExtension" type="number" placeholder="kg"  autocomplete="off" onChange={event => setBE(event.target.value)}/>
                        <p className="pasa-paragraph">STANDARD BAGGAGE</p>
                        <input className="pasa-textfield dark" id="input-standardBaggage" type="number" placeholder="kg"  autocomplete="off" onChange={event => setSB(event.target.value)}/>
                        <p className="pasa-paragraph">SHORT BAGGAGE EXTENSION</p>
                        <input className="pasa-textfield dark" id="input-shortBaggage" type="number" placeholder="kg"  autocomplete="off" onChange={event => setShB(event.target.value)}/>
                        <p className="pasa-paragraph result">DE-ICING FLUID @ 1m</p>
                        <input className="pasa-textfield dark" id="result-deIcing" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.DeIcingFluid_Result ? (Res.DeIcingFluid_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">DE-ICING FLUID @ 4.52m</p>
                        <input className="pasa-textfield dark" id="result-deIcing4" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.DeIcingFluid4_Result ? (Res.DeIcingFluid4_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL EMPTY MASS</p>
                        <input className="pasa-textfield dark" id="result-totalEmptyMass" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TotalEmptyMass_Result ? (Res.TotalEmptyMass_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TAKEOFF FUEL (in Main Tanks)</p>
                        <input className="pasa-textfield dark" id="result-TOFuelMain" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TOFuelKgMain_Result ? (Res.TOFuelKgMain_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">LANDING FUEL (in Main Tanks)</p>
                        <input className="pasa-textfield dark" id="result-LdgFuelMain" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.LdgFuelKgMain_Result ? (Res.LdgFuelKgMain_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TAKEOFF FUEL (in Auxiliary Tanks)</p>
                        <input className="pasa-textfield dark" id="result-TOFuelAux" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TOFuelKgAux_Result ? (Res.TOFuelKgAux_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">LANDING FUEL (in Auxiliary Tanks)</p>
                        <input className="pasa-textfield dark" id="result-LdgFuelAux" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.LdgFuelKgAux_Result ? (Res.LdgFuelKgAux_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL TAKEOFF MASS</p>
                        <input className="pasa-textfield dark" id="result-TotalMassTO" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TotalMassTO_Result ? (Res.TotalMassTO_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL LANDING MASS</p>
                        <input className="pasa-textfield dark" id="result-TotalMassLdg" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TotalMassLdg_Result ? (Res.TotalMassLdg_Result).toFixed(2) : null} disabled/>
                    </div>
                    <div class="col-lg-4 mr-auto pasa-column">
                        <p className="pasa-paragraph">EMPTY MOMENT</p>
                        <input className="pasa-textfield dark" id="result-emptyMoment" type="number" placeholder="kgm"  autocomplete="off" onChange={event => setEMo(event.target.value)}/>
                        <p className="pasa-paragraph result">FRONT SEATS MOMENT</p>
                        <input className="pasa-textfield dark" id="result-frontSeatsMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.FrontSeatsMoment_Result ? (Res.FrontSeatsMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">REAR SEATS MOMENT</p>
                        <input className="pasa-textfield dark" id="result-rearSeatsMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.RearSeatsMoment_Result ? (Res.RearSeatsMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">NOSE BAGGAGE MOMENT</p>
                        <input className="pasa-textfield dark" id="result-noseBaggageMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.NoseBaggageMoment_Result ? (Res.NoseBaggageMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">CABIN BAGGAGE MOMENT</p>
                        <input className="pasa-textfield dark" id="result-cabinBaggageMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.CabinBaggageMoment_Result ? (Res.CabinBaggageMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">BAGGAGE EXTENSION MOMENT</p>
                        <input className="pasa-textfield dark" id="result-baggageExtensionMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.BaggageExtensionMoment_Result ? (Res.BaggageExtensionMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">STANDARD BAGGAGE MOMENT</p>
                        <input className="pasa-textfield dark" id="result-standardBaggageMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.StandardBaggageMoment_Result ? (Res.StandardBaggageMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">SHORT BAGGAGE EXTENSION MOMENT</p>
                        <input className="pasa-textfield dark" id="result-shortBaggageMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.ShortBaggageMoment_Result ? (Res.ShortBaggageMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">DE-ICING FLUID @ 1m MOMENT</p>
                        <input className="pasa-textfield dark" id="result-deIcingMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.DeIcingFluidMoment_Result ? (Res.DeIcingFluidMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">DE-ICING FLUID @ 4.52m MOMENT</p>
                        <input className="pasa-textfield dark" id="result-deIcingMoment4" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.DeIcingFluid1Moment_Result ? (Res.DeIcingFluid1Moment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL EMPTY MOMENT</p>
                        <input className="pasa-textfield dark" id="result-totalEmptyMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.TotalMomentEmpty_Result ? (Res.TotalMomentEmpty_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TAKEOFF FUEL MOMENT (Main Tanks)</p>
                        <input className="pasa-textfield dark" id="result-TOFuelMainMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.TOMainTanksMoment_Result ? (Res.TOMainTanksMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">LANDING FUEL MOMENT (Main Tanks)</p>
                        <input className="pasa-textfield dark" id="result-LdgFuelMainMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.LdgMainTanksMoment_Result ? (Res.LdgMainTanksMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TAKEOFF FUEL MOMENT (Auxiliary Tanks)</p>
                        <input className="pasa-textfield dark" id="result-TOFuelAuxMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.TOAuxTanksMoment_Result ? (Res.TOAuxTanksMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">LANDING FUEL MOMENT (Auxiliary Tanks)</p>
                        <input className="pasa-textfield dark" id="result-LdgFuelAuxMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.LdgAuxTanksMoment_Result ? (Res.LdgAuxTanksMoment_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL TAKEOFF MOMENT</p>
                        <input className="pasa-textfield dark" id="result-totalMassTOMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.TotalMomentTO_Result ? (Res.TotalMomentTO_Result).toFixed(2) : null} disabled/>
                        <p className="pasa-paragraph result">TOTAL LANDING MOMENT</p>
                        <input className="pasa-textfield dark" id="result-totalMassLdgMoment" type="number" placeholder="RESULT: kgm"  autocomplete="off" value={Res.TotalMomentLdg_Result ? (Res.TotalMomentLdg_Result).toFixed(2) : null} disabled></input>
                    </div>
                </div>
                <br></br><br></br><br></br><br></br>
                <p className="pasa-paragraph result">KG OF FUEL TRANSFERRED FROM AUXILIARY TO MAIN TANKS</p>
                <input className="pasa-textfield dark" id="result-transferredFuel" type="number" placeholder="RESULT: kg"  autocomplete="off" value={Res.TransferredFuel_Result ? (Res.TransferredFuel_Result).toFixed(2) : null} disabled></input>
                <button className="pasa-button primary" onClick={event => setRES(calculateMB(FH, FF, FT, EM, EMo, FS, RS, NB, CB, BE, SB, ShB, D1, D4, TOLM, TOLA))}>CALCULATE</button>
                
                
            </div>
        </header>
    )
}