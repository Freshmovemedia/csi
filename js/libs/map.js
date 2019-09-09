$(document).ready(function () {

    // Hides restbutton on page load
    $('#resetBtn').hide();

    var region = {
        csiVa: {
            Name: 'CSI of Virginia, Inc. - Corporate Office',
            product: 'General Plastics',
            phone: '804.744.0700 ext 3',
            address: 'P.O.Box 74728 North Chesterfield, VA 23236',
            fax: '804.744.3911',
            firstContact: {
                title: 'President',
                name: 'Kevin Clasbey',
                email: 'Kevin@csiinc.org',
                phone: '804.744.0700 ext 3'
            },
            secondContact: {
                title: 'Accounting & Inside Sales',
                name: 'John Keefe',
                email: 'John@csiinc.org',
                phone: '252.916.5240'
            }
        },
        regionOne: {
            Name: 'Region 1: Comiskey & Associates LLC',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            phone: '518.477.2390',
            address: '12 Corporate Woods Blvd. Albany, NY 12221',
            fax: '518.477.3864',
            firstContact: {
                title: 'President',
                name: 'Adam Comiskey',
                email: 'ancomiskey@me.com',
                phone: ' 518.477.2390 ext 3',
                cell: '518.265.8702'
            },
            secondContact: {
                name: 'David Comiskey',
                email: 'comiskey@me.com',
                phone: '518.477.2390 ext 1',
                cell: '518.441.2461'
            },
            thirdContact: {
                name: 'Mark Hankle',
                email: 'mhankle@me.com',
                phone: '518.477.2390 ext 2',
                cell: '518.538.3646',
            }
        },
        regionTwo: {
            Name: 'Region 2: CSI of Virginia Inc.',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            address: '1030 Foxrun Terrace Hanover, PA 17331',
            fax: '804.744.3911',
            firstContact: {
                name: 'Bret Motter',
                email: 'bret@csiinc.org',
                cell: '717.880.7126'
            }
        },
        regionThree: {
            Name: 'Region 3: CSI of Virginia Inc.',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            address: '750 Majestic Oak Drive Charleston, SC 29412',
            fax: '804.744.3911',
            firstContact: {
                name: 'Josh Shifflett',
                email: 'josh@csiinc.org ',
                cell: '804.683.3262'
            }
        },
        regionFour: {
            Name: 'Region 4: CSI of Virginia, Inc.',
            product: 'Eco-Cold Doors, Chase Doors, Foamular Insulation',
            address: '2155 Old Moultrie Road Suite 101 St.Augustine, FL 32086 ',
            phone: '904.797.6300',
            cell: '904.824.6825',
            firstContact: {
                name: 'Allen Rockafellow',
                email: 'arockafellow@att.net',
                cell: '904.806.2839'
            }
        },
        regionFive: {
            Name: 'Region 5: CSI of Virginia, Inc.',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            address: '707 Hidden Circle Centerville, OH 45458',
            fax: '804.744.3911',
            firstContact: {
                name: 'Mike Bradshaw',
                email: 'mbradshaw@csioh.com',
                cell: '937.409.8428'
            },
            secondAddress: '970 Reece Ridge Drive Gahanna, OH 43230',
            secondPhone: '614.975.0407',
            secondFax: '804.744.3911',
            secondContact: {
                name: 'Edward D. Brackman',
                email: 'edbrackman@csioh.com',
                cell: '617.975.0407'
            }
        }
    }
    console.log(region.csiVa)
    // Start map configs
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
                id: "AK",
                'id_no_spaces': "AK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            AL: {
                id: "AL",
                'id_no_spaces': "AL",
                tooltip: "Region 4: CSI of Virginia, Inc.",
                data: (region.regionFour)
            },
            AR: {
                id: "AR",
                'id_no_spaces': "AR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            AZ: {
                id: "AZ",
                'id_no_spaces': "AZ",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            CA: {
                id: "CA",
                'id_no_spaces': "CA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            CO: {
                id: "CO",
                'id_no_spaces': "CO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            CT: {
                id: "CT",
                'id_no_spaces': "CT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            DC: {
                id: "DC",
                'id_no_spaces': "DC",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: (region.regionThree),
            },
            DE: {
                id: "DE",
                'id_no_spaces': "DE",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: (region.regionTwo)
            },
            FL: {
                id: "FL",
                'id_no_spaces': "FL",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: (region.regionFour)
            },
            GA: {
                id: "GA",
                'id_no_spaces': "GA",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: (region.regionFour)
            },
            HI: {
                id: "HI",
                'id_no_spaces': "HI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            IA: {
                id: "IA",
                'id_no_spaces': "IA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            ID: {
                id: "ID",
                'id_no_spaces': "ID",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            IL: {
                id: "IL",
                'id_no_spaces': "IL",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            IN: {
                id: "IN",
                'id_no_spaces': "IN",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: (region.regionFour)
            },
            KS: {
                id: "KS",
                'id_no_spaces': "KS",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            KY: {
                id: "KY",
                'id_no_spaces': "KY",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: (region.regionFive)
            },
            LA: {
                id: "LA",
                'id_no_spaces': "LA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            MA: {
                id: "MA",
                'id_no_spaces': "MA",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            MD: {
                id: "MD",
                'id_no_spaces': "MD",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: (region.regionTwo)
            },
            ME: {
                id: "ME",
                'id_no_spaces': "ME",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            MI: {
                id: "MI",
                'id_no_spaces': "MI",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: (region.regionFive),
            },
            MN: {
                id: "MN",
                'id_no_spaces': "MN",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            MO: {
                id: "MO",
                'id_no_spaces': "MO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            MS: {
                id: "MS",
                'id_no_spaces': "MS",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: (region.regionFour)
            },
            MT: {
                id: "MT",
                'id_no_spaces': "MT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            NC: {
                id: "NC",
                'id_no_spaces': "NC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: (region.regionThree),
            },
            ND: {
                id: "ND",
                'id_no_spaces': "ND",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            NE: {
                id: "NE",
                'id_no_spaces': "NE",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            NH: {
                id: "NH",
                'id_no_spaces': "NH",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            NJ: {
                id: "NJ",
                'id_no_spaces': "NJ",
                tooltip: "Region 2: CSI of Virginiam Inc.",
                data: (region.regionTwo)
            },
            NM: {
                id: "NM",
                'id_no_spaces': "NM",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            NV: {
                id: "NV",
                'id_no_spaces': "NV",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            NY: {
                id: "NY",
                'id_no_spaces': "NY",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            OH: {
                id: "OH",
                'id_no_spaces': "OH",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: (region.regionFive)
            },
            OK: {
                id: "OK",
                'id_no_spaces': "OK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            OR: {
                id: "OR",
                'id_no_spaces': "OR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            PA: {
                id: "PA",
                'id_no_spaces': "PA",
                tooltip: "Region 2: CSI of Virginia",
                data: (region.regionTwo)
            },
            RI: {
                id: "RI",
                'id_no_spaces': "RI",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            SC: {
                id: "SC",
                'id_no_spaces': "SC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: (region.regionThree)
            },
            SD: {
                id: "SD",
                'id_no_spaces': "SD",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            TN: {
                id: "TN",
                'id_no_spaces': "TN",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: (region.regionThree)
            },
            TX: {
                id: "TX",
                'id_no_spaces': "TX",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            UT: {
                id: "UT",
                'id_no_spaces': "UT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            VA: {
                id: "VA",
                'id_no_spaces': "VA",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: (region.regionThree)
            },
            VT: {
                id: "VT",
                'id_no_spaces': "VT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: (region.regionOne)
            },
            WA: {
                id: "WA",
                'id_no_spaces': "WA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            WI: {
                id: "WI",
                'id_no_spaces': "WI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
            },
            WV: {
                id: "WV",
                'id_no_spaces': "WV",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: (region.regionFive)
            },
            WY: {
                id: "WY",
                'id_no_spaces': "WY",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: (region.csiVa)
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