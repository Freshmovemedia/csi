$(document).ready(function () {
    $("#mapsvg").mapSvg({
        width: 959,
        height: 593,
        colors: {
            baseDefault: "#000000",
            background: "#fff",
            selected: 40,
            directory: "#fafafa",
            status: {},
            base: "#fff",
            stroke: "d3d3d3",
            hover: "d9d9d9"
        },
        regions: {
            AK: {
                fill: "rgba(0,179,29,1)",
                id: "AK",
                'id_no_spaces': "AK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            AL: {
                id: "AL",
                'id_no_spaces': "AL",
                tooltip: "Region 4: CSI of Virginia, Inc.",
                data: {}
            },
            AR: {
                id: "AR",
                'id_no_spaces': "AR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            AZ: {
                id: "AZ",
                'id_no_spaces': "AZ",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            CA: {
                id: "CA",
                'id_no_spaces': "CA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            CO: {
                id: "CO",
                'id_no_spaces': "CO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            CT: {
                id: "CT",
                'id_no_spaces': "CT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            DC: {
                id: "DC",
                'id_no_spaces': "DC",
                tooltip: "Region 2: CSI of Virginia",
                data: {}
            },
            DE: {
                id: "DE",
                'id_no_spaces': "DE",
                tooltip: "Region 2: CSI of Virginia",
                data: {}
            },
            FL: {
                id: "FL",
                'id_no_spaces': "FL",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {}
            },
            GA: {
                id: "GA",
                'id_no_spaces': "GA",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {}
            },
            HI: {
                id: "HI",
                'id_no_spaces': "HI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            IA: {
                id: "IA",
                'id_no_spaces': "IA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            ID: {
                id: "ID",
                'id_no_spaces': "ID",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            IL: {
                id: "IL",
                'id_no_spaces': "IL",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            IN: {
                id: "IN",
                'id_no_spaces': "IN",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {}
            },
            KS: {
                id: "KS",
                'id_no_spaces': "KS",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            KY: {
                id: "KY",
                'id_no_spaces': "KY",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {}
            },
            LA: {
                id: "LA",
                'id_no_spaces': "LA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            MA: {
                id: "MA",
                'id_no_spaces': "MA",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            MD: {
                id: "MD",
                'id_no_spaces': "MD",
                tooltip: "Region 2: CSI of Virginia",
                data: {}
            },
            ME: {
                id: "ME",
                'id_no_spaces': "ME",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            MI: {
                id: "MI",
                'id_no_spaces': "MI",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {}
            },
            MN: {
                id: "MN",
                'id_no_spaces': "MN",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            MO: {
                id: "MO",
                'id_no_spaces': "MO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            MS: {
                id: "MS",
                'id_no_spaces': "MS",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {}
            },
            MT: {
                id: "MT",
                'id_no_spaces': "MT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            NC: {
                id: "NC",
                'id_no_spaces': "NC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {}
            },
            ND: {
                id: "ND",
                'id_no_spaces': "ND",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            NE: {
                id: "NE",
                'id_no_spaces': "NE",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            NH: {
                id: "NH",
                'id_no_spaces': "NH",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            NJ: {
                id: "NJ",
                'id_no_spaces': "NJ",
                tooltip: "Region 2: CSI of Virginia",
                data: {}
            },
            NM: {
                id: "NM",
                'id_no_spaces': "NM",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            NV: {
                id: "NV",
                'id_no_spaces': "NV",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            NY: {
                id: "NY",
                'id_no_spaces': "NY",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            OH: {
                id: "OH",
                'id_no_spaces': "OH",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {}
            },
            OK: {
                id: "OK",
                'id_no_spaces': "OK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            OR: {
                id: "OR",
                'id_no_spaces': "OR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            PA: {
                id: "PA",
                'id_no_spaces': "PA",
                tooltip: "Region 2: CSI of Virginia",
                data: {}
            },
            RI: {
                id: "RI",
                'id_no_spaces': "RI",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            SC: {
                id: "SC",
                'id_no_spaces': "SC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {}
            },
            SD: {
                id: "SD",
                'id_no_spaces': "SD",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            TN: {
                id: "TN",
                'id_no_spaces': "TN",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {}
            },
            TX: {
                id: "TX",
                'id_no_spaces': "TX",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            UT: {
                id: "UT",
                'id_no_spaces': "UT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            VA: {
                id: "VA",
                'id_no_spaces': "VA",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {}
            },
            VT: {
                id: "VT",
                'id_no_spaces': "VT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {}
            },
            WA: {
                id: "WA",
                'id_no_spaces': "WA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            WI: {
                id: "WI",
                'id_no_spaces': "WI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            },
            WV: {
                id: "WV",
                'id_no_spaces': "WV",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {}
            },
            WY: {
                id: "WY",
                'id_no_spaces': "WY",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {}
            }
        },
        viewBox: [0, 0, 959, 593],
        gauge: {
            on: false,
            labels: {
                low: "low",
                high: "high"
            },
            colors: {
                lowRGB: {
                    r: 85,
                    g: 0,
                    b: 0,
                    a: 1
                },
                highRGB: {
                    r: 238,
                    g: 0,
                    b: 0,
                    a: 1
                },
                low: "#550000",
                high: "#ee0000",
                diffRGB: {
                    r: 153,
                    g: 0,
                    b: 0,
                    a: 0
                }
            },
            min: 0,
            max: false
        },
        source: "/mapsvg/maps/not-calibrated/usa/usa-labels-full.svg",
        title: "Usa-labels-full",
        responsive: true
    });
});
