$(document).ready(function () {

    var sectors = {
        csiVa: {
            name: 'CSI of Virginia, Inc. - Corporate Office',
            product: 'General Plastics',
            office: '804.744.0700 ext 3',
            address: 'P.O.Box 74728 North Chesterfield, VA 23236',
            fax: '804.744.3911',
            contacts: [{
                name: 'Kevin Clasbey - President',
                email: 'Kevin@csiinc.org',
                phone: '804.744.0700 ext 3',
            }, {
                name: 'John Keefe - Accounting & Inside Sales',
                email: 'John@csiinc.org',
                phone: '252.916.5240',
            }]
        },
        regionOne: {
            name: 'Region 1: Comiskey & Associates LLC',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            office: '518.477.2390',
            address: '12 Corporate Woods Blvd. Albany, NY 12221',
            fax: '518.477.3864',
            contacts: [{
                name: 'Adam Comiskey - President',
                email: 'ancomiskey@me.com',
                phone: ' 518.477.2390 ext 3 Cell: 518.265.8702',
            }, {
                name: 'David Comiskey',
                email: 'comiskey@me.com',
                phone: '518.477.2390 ext 1 Cell: 518.441.2461',
            }, {
                name: 'Mark Hankle',
                email: 'mhankle@me.com',
                phone: '518.477.2390 ext 2 Cell: 518.538.3646',
            }]
        },
        regionTwo: {
            name: 'Region 2: CSI of Virginia Inc.',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            address: '1030 Foxrun Terrace Hanover, PA 17331',
            fax: '804.744.3911',
            office: '717.880.7126',
            contacts: [{
                name: 'Bret Motter',
                email: 'bret@csiinc.org',
                phone: '717.880.7126'
            }]
        },
        regionThree: {
            name: 'Region 3: CSI of Virginia Inc.',
            product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
            address: '750 Majestic Oak Drive Charleston, SC 29412',
            fax: '804.744.3911',
            office: '804.683.3262',
            contacts: [{
                name: 'Josh Shifflett',
                email: 'josh@csiinc.org ',
                phone: '804.683.3262',
            }],
            regionFour: {
                name: 'Region 4: CSI of Virginia, Inc.',
                product: 'Eco-Cold Doors, Chase Doors, Foamular Insulation',
                address: '2155 Old Moultrie Road Suite 101 St.Augustine, FL 32086 ',
                office: '904.797.6300 Cell:904.824.6825',
                contacts: [{
                    name: 'Allen Rockafellow',
                    email: 'arockafellow@att.net',
                    phone: '904.806.2839'
                }]
            },
            regionFive: {
                name: 'Region 5: CSI of Virginia, Inc.',
                product: 'Green Span Profiles, Eco-Cold Doors, Chase Doors, Foamular Insulation, Aluminum Tee Ceilings',
                address: '707 Hidden Circle Centerville, OH 45458',
                fax: '804.744.3911',
                office: '937.409.8428',
                contacts: [{
                    name: 'Mike Bradshaw',
                    email: 'mbradshaw@csioh.com',
                    phone: '937.409.8428'
                }, {
                    name: 'Edward D. Brackman',
                    email: 'edbrackman@csioh.com',
                    phone: '617.975.0407'
                }],
                seconday: {
                    secondAddress: '970 Reece Ridge Drive Gahanna, OH 43230',
                    secondPhone: '614.975.0407',
                    secondFax: '804.744.3911',
                }
            }
        }
    };

    // console.log(sectors.csiVa)
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
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            AL: {
                id: "AL",
                'id_no_spaces': "AL",
                tooltip: "Region 4: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionFour)
                }
            },
            AR: {
                id: "AR",
                'id_no_spaces': "AR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            AZ: {
                id: "AZ",
                'id_no_spaces': "AZ",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            CA: {
                id: "CA",
                'id_no_spaces': "CA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            CO: {
                id: "CO",
                'id_no_spaces': "CO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            CT: {
                id: "CT",
                'id_no_spaces': "CT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            DC: {
                id: "DC",
                'id_no_spaces': "DC",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionThree)
                }
            },
            DE: {
                id: "DE",
                'id_no_spaces': "DE",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionTwo)
                }
            },
            FL: {
                id: "FL",
                'id_no_spaces': "FL",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFour)
                }
            },
            GA: {
                id: "GA",
                'id_no_spaces': "GA",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFour)
                }
            },
            HI: {
                id: "HI",
                'id_no_spaces': "HI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            IA: {
                id: "IA",
                'id_no_spaces': "IA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            ID: {
                id: "ID",
                'id_no_spaces': "ID",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            IL: {
                id: "IL",
                'id_no_spaces': "IL",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            IN: {
                id: "IN",
                'id_no_spaces': "IN",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFour)
                }
            },
            KS: {
                id: "KS",
                'id_no_spaces': "KS",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            KY: {
                id: "KY",
                'id_no_spaces': "KY",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFive)
                }
            },
            LA: {
                id: "LA",
                'id_no_spaces': "LA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            MA: {
                id: "MA",
                'id_no_spaces': "MA",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            MD: {
                id: "MD",
                'id_no_spaces': "MD",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionTwo)
                }
            },
            ME: {
                id: "ME",
                'id_no_spaces': "ME",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            MI: {
                id: "MI",
                'id_no_spaces': "MI",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFive)
                }
            },
            MN: {
                id: "MN",
                'id_no_spaces': "MN",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            MO: {
                id: "MO",
                'id_no_spaces': "MO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            MS: {
                id: "MS",
                'id_no_spaces': "MS",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFour)
                }
            },
            MT: {
                id: "MT",
                'id_no_spaces': "MT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            NC: {
                id: "NC",
                'id_no_spaces': "NC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionThree)
                }
            },
            ND: {
                id: "ND",
                'id_no_spaces': "ND",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            NE: {
                id: "NE",
                'id_no_spaces': "NE",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            NH: {
                id: "NH",
                'id_no_spaces': "NH",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            NJ: {
                id: "NJ",
                'id_no_spaces': "NJ",
                tooltip: "Region 2: CSI of Virginiam Inc.",
                data: {
                    myParameter: (sectors.regionTwo)
                }
            },
            NM: {
                id: "NM",
                'id_no_spaces': "NM",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            NV: {
                id: "NV",
                'id_no_spaces': "NV",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            NY: {
                id: "NY",
                'id_no_spaces': "NY",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            OH: {
                id: "OH",
                'id_no_spaces': "OH",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFive)
                }
            },
            OK: {
                id: "OK",
                'id_no_spaces': "OK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            OR: {
                id: "OR",
                'id_no_spaces': "OR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            PA: {
                id: "PA",
                'id_no_spaces': "PA",
                tooltip: "Region 2: CSI of Virginia",
                data: {
                    myParameter: (sectors.regionTwo)
                }
            },
            RI: {
                id: "RI",
                'id_no_spaces': "RI",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            SC: {
                id: "SC",
                'id_no_spaces': "SC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionThree)
                }
            },
            SD: {
                id: "SD",
                'id_no_spaces': "SD",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            TN: {
                id: "TN",
                'id_no_spaces': "TN",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionThree)
                }
            },
            TX: {
                id: "TX",
                'id_no_spaces': "TX",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            UT: {
                id: "UT",
                'id_no_spaces': "UT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            VA: {
                id: "VA",
                'id_no_spaces': "VA",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                data: {
                    myParameter: (sectors.regionThree)
                }
            },
            VT: {
                id: "VT",
                'id_no_spaces': "VT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                data: {
                    myParameter: (sectors.regionOne)
                }
            },
            WA: {
                id: "WA",
                'id_no_spaces': "WA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            WI: {
                id: "WI",
                'id_no_spaces': "WI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)
                }
            },
            WV: {
                id: "WV",
                'id_no_spaces': "WV",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                data: {
                    myParameter: (sectors.regionFive)
                }
            },
            WY: {
                id: "WY",
                'id_no_spaces': "WY",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                data: {
                    myParameter: (sectors.csiVa)

                }
            }
        },
        viewBox: [0, 0, 959, 593],
        onClick: function () {

            if (this.data.myParameter) {
                var _thisfuckingDooDad = this.data.myParameter
                console.log(_thisfuckingDooDad.contacts.length)
                console.log(_thisfuckingDooDad.contacts)
                var contactInfo = $('<div class="contact-info">');
                var regionName = $('<h3>').text('Region Name: ' + _thisfuckingDooDad.name);
                contactInfo.append(regionName);
                var regionPoduct = $('<h4>').text('Products: ' + _thisfuckingDooDad.product);
                contactInfo.append(regionPoduct);
                var regionAddress = $('<h4>').text('Primary Address: ' + _thisfuckingDooDad.address);
                contactInfo.append(regionAddress);
                var regionOffice = $('<h4>').text('Office Number: ' + _thisfuckingDooDad.office);
                contactInfo.append(regionOffice);
                var linebreak = $('<hr>');
                contactInfo.append(linebreak);

                if (typeof _thisfuckingDooDad.contacts[1] === "undefined") {
                    var firstContactName = $('<h4>').text('Primary Contact: ' + _thisfuckingDooDad.contacts[0].name);
                    contactInfo.append(firstContactName);
                    var firstContactPhone = $('<h4>').text('Primary Phone: ' + _thisfuckingDooDad.contacts[0].phone);
                    contactInfo.append(firstContactPhone);
                    var firstContactEmail = $('<h4>').text('Primary Email: ' + _thisfuckingDooDad.contacts[0].email);
                    contactInfo.append(firstContactEmail);
                }  else if (typeof _thisfuckingDooDad.contacts[2] === "undefined") {
                    var firstContactName = $('<h4>').text('Primary Contact: ' + _thisfuckingDooDad.contacts[0].name);
                    contactInfo.append(firstContactName);
                    var firstContactPhone = $('<h4>').text('Primary Phone: ' + _thisfuckingDooDad.contacts[0].phone);
                    contactInfo.append(firstContactPhone);
                    var firstContactEmail = $('<h4>').text('Primary Email: ' + _thisfuckingDooDad.contacts[0].email);
                    contactInfo.append(firstContactEmail);
                    var linebreakTwo = $('<hr>');
                     //Second Contact
                    contactInfo.append(linebreakTwo);
                    var secondContactName = $('<h4>').text('Secondary Contact: ' + _thisfuckingDooDad.contacts[1].name);
                    contactInfo.append(secondContactName);
                    var secondContactPhone = $('<h4>').text('Secondary Phone: ' + _thisfuckingDooDad.contacts[1].phone);
                    contactInfo.append(secondContactPhone);
                    var secondContactEmail = $('<h4>').text('Secondary Email: ' + _thisfuckingDooDad.contacts[1].email);
                    contactInfo.append(secondContactEmail);
                } else {
                    var firstContactName = $('<h4>').text('Primary Contact: ' + _thisfuckingDooDad.contacts[0].name);
                    contactInfo.append(firstContactName);
                    var firstContactPhone = $('<h4>').text('Primary Phone: ' + _thisfuckingDooDad.contacts[0].phone);
                    contactInfo.append(firstContactPhone);
                    var firstContactEmail = $('<h4>').text('Primary Email: ' + _thisfuckingDooDad.contacts[0].email);
                    contactInfo.append(firstContactEmail);
                    var linebreakThree = $('<hr>');
                    contactInfo.append(linebreakThree);
                    //Second Contact
                    var secondContactName = $('<h4>').text('Secondary Contact: ' + _thisfuckingDooDad.contacts[1].name);
                    contactInfo.append(secondContactName);
                    var secondContactPhone = $('<h4>').text('Secondary Phone: ' + _thisfuckingDooDad.contacts[1].phone);
                    contactInfo.append(secondContactPhone);
                    var secondContactEmail = $('<h4>').text('Secondary Email: ' + _thisfuckingDooDad.contacts[1].email);
                    contactInfo.append(secondContactEmail);
                    var linebreakFour = $('<hr>');
                    contactInfo.append(linebreakFour);
                    //Third Contact
                    var thirdContactName = $('<h4>').text('Third Contact: ' + _thisfuckingDooDad.contacts[2].name);
                    contactInfo.append(thirdContactName);
                    var thirdContactPhone = $('<h4>').text('Third Phone: ' + _thisfuckingDooDad.contacts[2].phone);
                    contactInfo.append(thirdContactPhone);
                    var thirdContactEmail = $('<h4>').text('Third Email: ' + _thisfuckingDooDad.contacts[2].email);
                    contactInfo.append(thirdContactEmail);
                }
            }



            // console.log('Third Name: ' + _thisfuckingDooDad.thirdContact.name);
            // console.log('Third Phone: ' + _thisfuckingDooDad.thirdContact.phone);
            // console.log('Third Email: ' + _thisfuckingDooDad.thirdContact.email);

            //Display contact Info
            $('#contactInfo').html(contactInfo);
        },
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