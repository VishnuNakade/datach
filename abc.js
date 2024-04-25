p1ValueTot = 0;
p2ValueTot = 0;
p3ValueTot = 0;




const dataCharts = Object.entries(data)
    .map(([key, value]) => {
        let dateForGraph, dateForCalculation;
        var mail = `${selectedItem}`

        if (value.key > 1663660000 && mail == "ftb001") {

            const t = new Date((Number(value.key) + (5400 - 230)) * 1000);
            dateForGraph = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(t);

            dateForCalculation = new Intl.DateTimeFormat('en-US', { hour: '2-digit', hour12: false }).format(t);

            if (prevTime == Number(dateForCalculation)) {
                flag = 1;
                if (!(isNaN((value.val().solarVoltage) * (value.val().solarCurrent))) && !(isNaN((value.val().gridVoltage) * (value.val().gridCurrent))) && !(isNaN((value.val().inverterVoltage) * (value.val().inverterCurrent)))) {
                    timeCount = timeCount + 1;

                    p1Value = p1Value + (value.val().solarVoltage) * (value.val().solarCurrent)
                    p2Value = p2Value + (value.val().gridVoltage) * (value.val().gridCurrent)
                    p3Value = p3Value + (value.val().inverterVoltage) * (value.val().inverterCurrent)
                }
                // console.log("prevTime")
                // console.log(prevTime)            

            } else {

                if (flag == 1) {

                    p1ValueTot = p1ValueTot + p1Value / timeCount;
                    p2ValueTot = p2ValueTot + p2Value / timeCount;
                    p3ValueTot = p3ValueTot + p3Value / timeCount;

                    if (isNaN(p1ValueTot)) {
                        p1ValueTot = 0;

                    }

                    if (isNaN(p2ValueTot)) {
                        p2ValueTot = 0;

                    }

                    if (isNaN(p3ValueTot)) {
                        p3ValueTot = 0;

                    }

                    // console.log("p3ValueTot")
                    // console.log(p3ValueTot)

                    if (!(isNaN((value.val().solarVoltage) * (value.val().solarCurrent))) && !(isNaN((value.val().gridVoltage) * (value.val().gridCurrent))) && !(isNaN((value.val().inverterVoltage) * (value.val().inverterCurrent)))) {
                        timeCount = 1;
                        p1Value = (value.val().solarVoltage) * (value.val().solarCurrent);
                        p2Value = (value.val().gridVoltage) * (value.val().gridCurrent);
                        p3Value = (value.val().inverterVoltage) * (value.val().inverterCurrent);
                    }
                    if (prevTime == 24) {
                        prevTime = 1;
                    } else {
                        prevTime = prevTime + 1;
                    }
                }
            }

        } else {
            const t = new Date(value.key * 1000);
            dateForGraph = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }).format(t);

            dateForCalculation = new Intl.DateTimeFormat('en-US', { hour: '2-digit', hour12: false }).format(t);


            if (prevTime == Number(dateForCalculation)) {
                flag = 1;
                if (!(isNaN((value.val().solarVoltage) * (value.val().solarCurrent))) && !(isNaN((value.val().gridVoltage) * (value.val().gridCurrent))) && !(isNaN((value.val().inverterVoltage) * (value.val().inverterCurrent)))) {
                    timeCount = timeCount + 1;

                    p1Value = p1Value + (value.val().solarVoltage) * (value.val().solarCurrent)
                    p2Value = p2Value + (value.val().gridVoltage) * (value.val().gridCurrent)
                    p3Value = p3Value + (value.val().inverterVoltage) * (value.val().inverterCurrent)
                }
                // console.log("prevTime")
                // console.log(prevTime)            

            } else {

                if (flag == 1) {

                    p1ValueTot = p1ValueTot + p1Value / timeCount;
                    p2ValueTot = p2ValueTot + p2Value / timeCount;
                    p3ValueTot = p3ValueTot + p3Value / timeCount;

                    if (isNaN(p1ValueTot)) {
                        p1ValueTot = 0;

                    }

                    if (isNaN(p2ValueTot)) {
                        p2ValueTot = 0;

                    }

                    if (isNaN(p3ValueTot)) {
                        p3ValueTot = 0;

                    }

                    // console.log("p3ValueTot")
                    // console.log(p3ValueTot)

                    if (!(isNaN((value.val().solarVoltage) * (value.val().solarCurrent))) && !(isNaN((value.val().gridVoltage) * (value.val().gridCurrent))) && !(isNaN((value.val().inverterVoltage) * (value.val().inverterCurrent)))) {
                        timeCount = 1;
                        p1Value = (value.val().solarVoltage) * (value.val().solarCurrent);
                        p2Value = (value.val().gridVoltage) * (value.val().gridCurrent);
                        p3Value = (value.val().inverterVoltage) * (value.val().inverterCurrent);
                    }
                    if (prevTime == 24) {
                        prevTime = 1;
                    } else {
                        prevTime = prevTime + 1;
                    }
                }
            }
        }


        axisValueCount = axisValueCount + 1;

        if (axisValueCount < 10) {
            v1 = Math.abs(value.val().solarVoltage)
            myArray1.push(v1)

            v2 = Math.abs(value.val().solarCurrent)
            myArray2.push(v2)

            v3 = Math.abs((value.val().solarVoltage) * (value.val().solarCurrent))
            myArray3.push(v3)

            v4 = Math.abs(value.val().inverterVoltage)
            myArray4.push(v4)

            v5 = Math.abs(value.val().inverterCurrent)
            myArray5.push(v5)

            v6 = Math.abs((value.val().inverterVoltage) * (value.val().inverterCurrent))
            myArray6.push(v6)

            v7 = Math.abs(value.val().gridVoltage)
            myArray7.push(v7)

            v8 = Math.abs(value.val().gridCurrent)
            myArray8.push(v8)

            v9 = Math.abs((value.val().gridVoltage) * (value.val().gridCurrent))
            myArray9.push(v9)

            v10 = Math.abs(value.val().batteryVoltage)
            myArray10.push(v10)

            v11 = Math.abs(value.val().batteryCurrent)
            myArray11.push(v11)

            v12 = Math.abs((value.val().batteryVoltage) * (value.val().batteryCurrent))
            myArray12.push(v12)

        } else {
            myArray1.push(Math.abs(value.val().solarVoltage))
            myArray2.push(Math.abs(value.val().solarCurrent))
            myArray3.push(Math.abs((value.val().solarVoltage) * (value.val().solarCurrent)))

            myArray4.push(Math.abs(value.val().inverterVoltage))
            myArray5.push(Math.abs(value.val().inverterCurrent))
            myArray6.push(Math.abs((value.val().inverterVoltage) * (value.val().inverterCurrent)))

            myArray7.push(Math.abs(value.val().gridVoltage))
            myArray8.push(Math.abs(value.val().gridCurrent))
            myArray9.push(Math.abs((value.val().gridVoltage) * (value.val().gridCurrent)))

            myArray10.push(Math.abs(value.val().batteryVoltage))
            myArray11.push(Math.abs(value.val().batteryCurrent))
            myArray12.push(Math.abs((value.val().batteryVoltage) * (value.val().batteryCurrent)))

            let sum1 = 0;
            let sum2 = 0;
            let sum3 = 0;
            let sum4 = 0;
            let sum5 = 0;
            let sum6 = 0;
            let sum7 = 0;
            let sum8 = 0;
            let sum9 = 0;
            let sum10 = 0;
            let sum11 = 0;
            let sum12 = 0;

            for (var i = iterVal; i < iterVal + 10; i++) {
                sum1 = sum1 + myArray1[i]
                sum2 = sum2 + myArray2[i]
                sum3 = sum3 + myArray3[i]
                sum4 = sum4 + myArray4[i]
                sum5 = sum5 + myArray5[i]
                sum6 = sum6 + myArray6[i]
                sum7 = sum7 + myArray7[i]
                sum8 = sum8 + myArray8[i]
                sum9 = sum9 + myArray9[i]
                sum10 = sum10 + myArray10[i]
                sum11 = sum11 + myArray11[i]
                sum12 = sum12 + myArray12[i]
            }
            // console.log("sum2")
            // console.log(sum2)
            iterVal = iterVal + 1;
            v1 = sum1 / 10
            v2 = sum2 / 10
            v3 = sum3 / 10
            v4 = sum4 / 10
            v5 = sum5 / 10
            v6 = sum6 / 10
            v7 = sum7 / 10
            v8 = sum8 / 10
            v9 = sum9 / 10
            v10 = sum10 / 10
            v11 = sum11 / 10
            v12 = sum12 / 10
        }
        return {
            ccAxisXValue: dateForGraph,
            SolarVoltage: Math.floor(Math.abs(value.val().solarVoltage)),
            SolarCurrent: Math.abs(value.val().solarCurrent).toFixed(2),
            SolarPower: Math.floor( Math.abs((value.val().solarVoltage) * (value.val().solarCurrent))),

            InverterVoltage: Math.floor( Math.abs(value.val().inverterVoltage)),
            InverterCurrent:  Math.abs(value.val().inverterCurrent).toFixed(2),
            InverterPower: Math.floor( Math.abs((value.val().inverterVoltage) * (value.val().inverterCurrent))),

            GridVoltage: Math.floor( Math.abs(value.val().gridVoltage)),
            GridCurrent:Math.abs(value.val().gridCurrent).toFixed(2),
            GridPower:Math.floor( Math.abs((value.val().gridVoltage) * (value.val().gridCurrent))),

            BatteryVoltage: Math.floor( Math.abs(value.val().batteryVoltage)),
            BatteryCurrent: Math.abs(value.val().batteryCurrent).toFixed(2),
            BatteryPower: Math.floor( Math.abs((value.val().batteryVoltage) * (value.val().batteryCurrent))),

            SolarVoltageSmooth: v1,
            SolarCurrentSmooth: v2,
            SolarPowerSmooth: v3,

            InverterVoltageSmooth: v4,
            InverterCurrentSmooth: v5,
            InverterPowerSmooth: v6,

            GridVoltageSmooth: v7,
            GridCurrentSmooth: v8,
            GridPowerSmooth: v9,

            BatteryVoltageSmooth: v10,
            BatteryCurrentSmooth: v11,
            BatteryPowerSmooth: v12,

        }

    })