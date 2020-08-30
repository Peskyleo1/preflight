    //DA42 DSIM M&B
import React, {useState} from 'react';


export function calculateMB(FH, FF, FT, EM, EMo, FS, RS, NB, CB, BE, SB, ShB, D1, D4, TOLM, TOLA){
    const DieselSpecificWeight = 0.84; // kg/L
    const JetA1SpecificWeight = 0.8; // kg/L

    //User changeable Parameters
    let FlightHours = parseFloat(FH);
    let AvgConsumption = parseFloat(FF); // L/h

    let FuelTypeSpecificWeight = parseFloat(FT);

    let EmptyMass = parseFloat(EM);  // kg
    let EmptyMoment = parseFloat(EMo);  // kg*m
    let FrontSeats = parseFloat(FS);  // kg
    let RearSeats = parseFloat(RS);  // kg
    let NoseBaggage = parseFloat(NB);  // kg
    let CabinBaggage = parseFloat(CB);  // kg
    let BaggageExtension = parseFloat(BE);  // kg
    let StandardBaggage = parseFloat(SB);  //kg
    let ShortBaggage = parseFloat(ShB);  //kg
    let DeIcingFluid = parseFloat(D1);  // L
    let DeIcingFluid1 = parseFloat(D4);  // L
    let TOLitersMain = parseFloat(TOLM);  // L (189L = Max) (25USg per tank)
    let TOLitersAux = parseFloat(TOLA);  // L (99,792L = Max) (13USg per tank)
    //********** End of user changeable params **********/


    //********** ARMS **********
    const FrontSeatsArm = 2.3;
    const RearSeatsArm = 3.25;
    const NoseBaggageArm = 0.6;
    const CabinBaggageArm = 3.89;
    const BaggageExtensionArm = 4.54;
    const StandardBaggageArm = 3.65;
    const ShortBaggageArm = 3.97;
    const DeIcingFluidArm = 1.0;
    const DeIcingFluid1Arm = 4.52;
    const MainTanksArm = 2.63;
    const AuxTanksArm = 3.2;

    //********** Mass Results **********
    let TOFuelKgMain;
    let LdgFuelKgMain;
    let TOFuelKgAux;
    let LdgFuelKgAux;
    let TotalMassEmpty;
    let TotalMassTO;
    let TotalMassLdg;

    //********** Moment Results **********
    let FrontSeatsMoment;
    let RearSeatsMoment;
    let NoseBaggageMoment;
    let CabinBaggageMoment;
    let BaggageExtensionMoment;
    let StandardBaggageMoment;
    let ShortBaggageMoment;
    let DeIcingFluidMoment;
    let DeIcingFluid1Moment;
    let TotalMomentEmpty;
    let TOMainTanksMoment;
    let TOAuxTanksMoment;
    let LdgMainTanksMoment;
    let LdgAuxTanksMoment;
    let TotalMomentTO;
    let TotalMomentLdg;

    //********** Functions **********/
    function TransferFuel(kg){

    }
    //********** RESULTS **********/
    console.log(" ********** START **********");
    //Navigation Consumption
    let NavigationConsumption;
    let TransferredFuel;
    NavigationConsumption = FlightHours * AvgConsumption;
    //Main tanks 94.5
    if (NavigationConsumption > 30 && NavigationConsumption <= 60 ){
        //move 5 gallons from aux to main
        console.log("Moved 10 Gallons (30kg): Aux Tanks => Main Tanks");
        TransferredFuel = (5 * 3.78 * FuelTypeSpecificWeight * 2);
    }
    if (NavigationConsumption > 60 && NavigationConsumption <= 90) {
        //Move 10 gallons
        console.log("Moved 20 Gallons (60kg): Aux Tanks => Main Tanks");
        TransferredFuel = (10 * 3.78 * FuelTypeSpecificWeight * 2);
    }
    if (NavigationConsumption > 90){
        //Move 13,2 gallons
        console.log("Moved 26.4 Gallons (80kg): Aux Tanks => Main Tanks");
        TransferredFuel = (13.2 * 3.78 * FuelTypeSpecificWeight * 2);
    }
    console.log("********** Fuel Transfer Completed **********");

    //Empty Mass
    console.log("Empty Mass: " + EmptyMass + " | " + EmptyMoment);

    //Front Seats
    FrontSeatsMoment = FrontSeats * FrontSeatsArm;
    console.log("Front Seats: " + FrontSeats + " | " + FrontSeatsMoment);

    //Rear Seats
    RearSeatsMoment = RearSeats * RearSeatsArm;
    console.log("Rear Seats: " + RearSeats + " | " + RearSeatsMoment);

    //Nose Baggage
    NoseBaggageMoment = NoseBaggage * NoseBaggageArm;
    console.log("Nose Baggage: " + NoseBaggage + " | " + NoseBaggageMoment);

    //Cabin Baggage
    CabinBaggageMoment = CabinBaggage * CabinBaggageArm;
    console.log("Cabin Baggage: " + CabinBaggage + " | " + CabinBaggageMoment);

    //Baggage Extension
    BaggageExtensionMoment = BaggageExtension * BaggageExtensionArm;
    console.log("Baggage Extension: " + BaggageExtension + " | " + BaggageExtensionMoment);

    //Standard Baggage
    StandardBaggageMoment = StandardBaggage * StandardBaggageArm;
    console.log("Standard Baggage: " + StandardBaggage + " | " + StandardBaggageMoment);

    //Short Baggage
    ShortBaggageMoment = ShortBaggage * ShortBaggageArm;
    console.log("Short Baggage: " + ShortBaggage + " | " + ShortBaggageMoment);

    //De-Icing Fluid
    let DeIcingFluidKg = DeIcingFluid * 1.1;
    DeIcingFluidMoment = DeIcingFluidKg * DeIcingFluidArm;
    console.log("De-Icing Fluid: " + DeIcingFluidKg + " | " + DeIcingFluidMoment);

    //De-Icing Fluid 1
    let DeIcingFluid1Kg = DeIcingFluid1 * 1.1;
    DeIcingFluid1Moment = DeIcingFluid1Kg * DeIcingFluid1Arm;
    console.log("De-Icing Fluid @4.52m: " + DeIcingFluid1Kg + " | " + DeIcingFluid1Moment);

    //Total Mass & Total Moment
    TotalMassEmpty = EmptyMass + FrontSeats + RearSeats + NoseBaggage + CabinBaggage + BaggageExtension + StandardBaggage + ShortBaggage + DeIcingFluidKg + DeIcingFluid1Kg;
    TotalMomentEmpty = EmptyMoment + FrontSeatsMoment + RearSeatsMoment + NoseBaggageMoment + CabinBaggageMoment + BaggageExtensionMoment + StandardBaggageMoment + ShortBaggageMoment + DeIcingFluidMoment + DeIcingFluid1Moment;
    console.log("Total Mass Empty: " + TotalMassEmpty + " | " + TotalMomentEmpty);

    //Usable Fuel Main at TakeOff
    TOFuelKgMain = TOLitersMain * FuelTypeSpecificWeight;
    TOMainTanksMoment = TOFuelKgMain * MainTanksArm;
    console.log("Main Tanks TakeOff: " + TOFuelKgMain + " | " + TOMainTanksMoment);

    //Usable Fuel Main at Langing
    LdgFuelKgMain = TOFuelKgMain - (AvgConsumption * FuelTypeSpecificWeight * FlightHours) + TransferredFuel;
    LdgMainTanksMoment = LdgFuelKgMain * MainTanksArm;
    console.log("Main Tanks Landing: " + LdgFuelKgMain + " | " + LdgMainTanksMoment);

    //Usable Fuel AUX Tank Takeoff
    TOFuelKgAux = TOLitersAux * FuelTypeSpecificWeight;
    TOAuxTanksMoment = TOFuelKgAux * AuxTanksArm;
    console.log("Aux Tank Takeoff: " + TOFuelKgAux + " | " + TOAuxTanksMoment);

    //Usable Fuel AUX Tank Landing
    LdgFuelKgAux = TOFuelKgAux - TransferredFuel;
    LdgAuxTanksMoment = LdgFuelKgAux * AuxTanksArm;
    console.log("Aux Tank Landing: " + LdgFuelKgAux + " | " + LdgAuxTanksMoment);

    //Total Mass And Moment Takeoff
    TotalMassTO = TotalMassEmpty + TOFuelKgMain + TOFuelKgAux;
    TotalMomentTO = TotalMomentEmpty + TOMainTanksMoment + TOAuxTanksMoment;
    console.log("Total Mass Takeoff: " + TotalMassTO + " | " + TotalMomentTO);

    //Total Mass And Moment Ldg
    TotalMassLdg = TotalMassEmpty + LdgFuelKgMain + LdgFuelKgAux;
    TotalMomentLdg = TotalMomentEmpty + LdgMainTanksMoment + LdgAuxTanksMoment;
    console.log("Total Mass Landing: " + TotalMassLdg + " | " + TotalMomentLdg);
    console.log(" ********** END **********");

    return {
        
            DeIcingFluid_Result: DeIcingFluidKg,
            DeIcingFluid4_Result: DeIcingFluid1Kg,
            TotalEmptyMass_Result: TotalMassEmpty,
            TOFuelKgMain_Result: TOFuelKgMain,
            LdgFuelKgMain_Result: LdgFuelKgMain,
            TOFuelKgAux_Result: TOFuelKgAux,
            LdgFuelKgAux_Result: LdgFuelKgAux,
            TotalMassTO_Result: TotalMassTO,
            TotalMassLdg_Result: TotalMassLdg,
            EmptyMoment_Result: EmptyMoment,
            FrontSeatsMoment_Result: FrontSeatsMoment,
            RearSeatsMoment_Result: RearSeatsMoment,
            NoseBaggageMoment_Result: NoseBaggageMoment,
            CabinBaggageMoment_Result: CabinBaggageMoment,
            BaggageExtensionMoment_Result: BaggageExtensionMoment,
            StandardBaggageMoment_Result: StandardBaggageMoment,
            ShortBaggageMoment_Result: ShortBaggageMoment,
            DeIcingFluidMoment_Result: DeIcingFluidMoment,
            DeIcingFluid1Moment_Result: DeIcingFluid1Moment,
            TotalMomentEmpty_Result: TotalMomentEmpty,
            TOMainTanksMoment_Result: TOMainTanksMoment,
            LdgMainTanksMoment_Result: LdgMainTanksMoment,
            TOAuxTanksMoment_Result: TOAuxTanksMoment,
            LdgAuxTanksMoment_Result: LdgAuxTanksMoment,
            TotalMomentTO_Result: TotalMomentTO,
            TotalMomentLdg_Result: TotalMomentLdg
        

    }
}