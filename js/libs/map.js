$(document).ready(function () {
    // Hides map on page laod
    $('#mapsvg').hide()
    $('#table').hide()
    $('#stateInfo').hide()
    var products = ['General Plastics', 'Green Span Profiles', 'Eco Cold Doors', 'Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings']
    var regionProductName;

    function filter() {
        // Loads checkboxes for product filter for map
        for (var product of products) {
            $('#filter').append(
                $("<label class='filter-label'>").text(product).prepend(
                    $(" <input class='filter-input'type='radio' name='radio-name'>").attr('value', product).attr('id', product)
                ));
        };

        // Validations for checkbox to show map,
        $('input[type="radio"]').click(function () {
            if ($(this).prop("checked") == true) {
                $('#mapsvg').show()
                $('#stateInfo').show()
                regionProductName = $(this).val()
            };
        });
    };
    $('#outUS').click(function () {
        console.log('hi');
        $('#contactInfo').empty()
        $('#contactInfoTable').empty()
        $('#table').show()
        var contactInfo = $('<div class="contact-info" id="scrollToAchor">');
        var regionName = $('<h3>').text('Region Name: ' + sectors.corporateOffice.name);
        var regionPoduct = $('<h6>').text('Products: ' + sectors.corporateOffice.product.join(", "));
        var regionAddress = $('<h6>').text(sectors.corporateOffice.address);
        var regionOffice = $('<h6>').text('Office Number: ' + sectors.corporateOffice.office);
        contactInfo.append(regionName);
        contactInfo.append(regionPoduct);
        contactInfo.append(regionAddress);
        contactInfo.append(regionOffice);
        var contactInfoTableRowOne = $('<tr>');
        var contactInfoTableRowTwo = $('<tr>');
        var contactInfoTableRowThree = $('<tr>');
        var contactInfoTableRowFour = $('<tr>');

        var firstContactName = $('<td>').text(sectors.corporateOffice.contacts[0].name);
        contactInfoTableRowOne.append(firstContactName);
        var firstContactPhone = $('<td>').text(sectors.corporateOffice.contacts[0].phone);
        contactInfoTableRowOne.append(firstContactPhone);
        var firstContactEmail = $('<td>').html('<a href=mailto:' + sectors.corporateOffice.contacts[0].email + '>' +
            sectors.corporateOffice.contacts[0].email + '</a>');
        contactInfoTableRowOne.append(firstContactEmail);
        var secondContactName = $('<td>').text(sectors.corporateOffice.contacts[1].name);
        contactInfoTableRowTwo.append(secondContactName);
        var secondContactPhone = $('<td>').text(sectors.corporateOffice.contacts[1].phone);
        contactInfoTableRowTwo.append(secondContactPhone);
        var secondContactEmail = $('<td>').html('<a href=mailto:' + sectors.corporateOffice.contacts[1].email + '>' +
            sectors.corporateOffice.contacts[1].email + '</a>');
        contactInfoTableRowTwo.append(secondContactEmail);
        var thirdContactName = $('<td>').text(sectors.corporateOffice.contacts[2].name);
        contactInfoTableRowThree.append(thirdContactName);
        var thirdContactPhone = $('<td>').text(sectors.corporateOffice.contacts[2].phone);
        contactInfoTableRowThree.append(thirdContactPhone);
        var thirdContactEmail = $('<td>').html('<a href=mailto:' + sectors.corporateOffice.contacts[2].email + '>' + sectors.corporateOffice.contacts[2].email + '</a>');
        contactInfoTableRowThree.append(thirdContactEmail);
         var fourthContactName = $('<td>').text(sectors.corporateOffice.contacts[3].name);
         contactInfoTableRowFour.append(fourthContactName);
         var fourthContactPhone = $('<td>').text(sectors.corporateOffice.contacts[3].phone);
         contactInfoTableRowFour.append(fourthContactPhone);
         var fourthContactEmail = $('<td>').html('<a href=mailto:' + sectors.corporateOffice.contacts[3].email + '>' + sectors.corporateOffice.contacts[3].email + '</a>');
         contactInfoTableRowFour.append(fourthContactEmail);

        $('#contactInfo').html(contactInfo);
        $('#contactInfoTable').append(contactInfoTableRowOne);
        $('#contactInfoTable').append(contactInfoTableRowTwo);
        $('#contactInfoTable').append(contactInfoTableRowThree);
        $('#contactInfoTable').append(contactInfoTableRowFour);

    });
    filter()

    var sectors = {
        csiVa: {
            name: 'CSI of Virginia, Inc. - Corporate Office',
            product: ['General Plastics'],
            office: '804.744.0700 ext 3',
            address: 'P.O.Box 74728 North Chesterfield, VA 23236',
            fax: '804.744.3911',
            contacts: [{
                name: 'For the quickest response, please email General Plastics inquiries ',
                email: 'GP@csiinc.org',
                phone: '',
            }, {
                name: 'Kevin Clasbey - President',
                email: 'Kevin@csiinc.org',
                phone: '804.744.0700 ext 3',
            }, {
                name: 'John Keefe - Accounting & Inside Sales',
                email: 'John@csiinc.org',
                phone: '252.916.5240',
            }, {
                name: 'Josh Shifflett',
                email: 'Josh@csiinc.org',
                phone: '804.683.3262',
            }]
        },
        corporateOffice: {
            name: 'CSI of Virginia, Inc. - Corporate Office',
            product: ['General Plastics'],
            office: '804.744.0700 ext 3',
            address: 'P.O.Box 74728 North Chesterfield, VA 23236',
            fax: '804.744.3911',
            contacts: [{
                name: 'For the quickest response, please email General Plastics inquiries to',
                email: 'GP@csiinc.org',
                phone: '',
            }, {
                name: 'Kevin Clasbey - President',
                email: 'Kevin@csiinc.org',
                phone: '804.744.0700 ext 3',
            }, {
                name: 'John Keefe - Accounting & Inside Sales',
                email: 'John@csiinc.org',
                phone: '252.916.5240',
            }, {
                name: 'Josh Shifflett',
                email: 'Josh@csiinc.org',
                phone: '804.683.3262',
            }]
        },
        regionOne: {
            name: 'Region 1: Comiskey & Associates LLC',
            product: ['Green Span Profiles', 'Eco Cold Doors', 'Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings'],
            office: '518.477.2390',
            address: '12 Corporate Woods Blvd. Albany, NY 12211',
            fax: '518.477.3864',
            contacts: [{
                name: 'Adam Comiskey - President',
                email: 'ancomiskey@me.com',
                phone: '518.265.8702',
            }, {
                name: 'David Comiskey',
                email: 'comiskey@me.com',
                phone: '518.441.2461',
            }, {
                name: 'Mark Hankle',
                email: 'mhankle@me.com',
                phone: '518.538.3646',
            }]
        },
        regionTwo: {
            name: 'Region 2: CSI of Virginia Inc.',
            product: ['Green Span Profiles', 'Eco Cold Doors', 'Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings'],
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
            product: ['Green Span Profiles', 'Eco Cold Doors', 'Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings'],
            address: 'PO Box 527 Folly Beach, SC 29439 ',
            fax: '804.744.3911',
            office: '804.683.3262',
            contacts: [{
                name: 'Josh Shifflett',
                email: 'josh@csiinc.org ',
                phone: '804.683.3262',
            }],
        },
        regionFour: {
            name: 'Region 4: CSI of Virginia, Inc.',
            product: ['Eco Cold Doors', ' Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings'],
            address: '2155 Old Moultrie Road Suite 101 St.Augustine, FL 32086 ',
            office: '904.797.6300',
            contacts: [{
                name: 'Allen Rockafellow',
                email: 'arockafellow@att.net',
                phone: '904.806.2839'
            }]
        },

        regionFive: {
            name: 'Region 5: CSI of Virginia, Inc.',
            product: ['Green Span Profiles', 'Eco Cold Doors', 'Chase Doors', 'Foamular Insulation', 'Aluminum Tee Ceilings'],
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
    };
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
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            AL: {
                id: "AL",
                'id_no_spaces': "AL",
                tooltip: "Region 4: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFour),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            AR: {
                id: "AR",
                'id_no_spaces': "AR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            AZ: {
                id: "AZ",
                'id_no_spaces': "AZ",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            CA: {
                id: "CA",
                'id_no_spaces': "CA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            CO: {
                id: "CO",
                'id_no_spaces': "CO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            CT: {
                id: "CT",
                'id_no_spaces': "CT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            DC: {
                id: "DC",
                'id_no_spaces': "DC",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionThree),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            DE: {
                id: "DE",
                'id_no_spaces': "DE",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionTwo),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            FL: {
                id: "FL",
                'id_no_spaces': "FL",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFour),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            GA: {
                id: "GA",
                'id_no_spaces': "GA",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFour),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            HI: {
                id: "HI",
                'id_no_spaces': "HI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            IA: {
                id: "IA",
                'id_no_spaces': "IA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            ID: {
                id: "ID",
                'id_no_spaces': "ID",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            IL: {
                id: "IL",
                'id_no_spaces': "IL",
                tooltip: "Region 5: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            IN: {
                id: "IN",
                'id_no_spaces': "IN",
                tooltip: "Region 5: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    href: '#scrollToAchor',
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            KS: {
                id: "KS",
                'id_no_spaces': "KS",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    href: '#scrollToAchor',
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            KY: {
                id: "KY",
                'id_no_spaces': "KY",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            LA: {
                id: "LA",
                'id_no_spaces': "LA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MA: {
                id: "MA",
                'id_no_spaces': "MA",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MD: {
                id: "MD",
                'id_no_spaces': "MD",
                tooltip: "Region 2: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionTwo),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            ME: {
                id: "ME",
                'id_no_spaces': "ME",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MI: {
                id: "MI",
                'id_no_spaces': "MI",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MN: {
                id: "MN",
                'id_no_spaces': "MN",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MO: {
                id: "MO",
                'id_no_spaces': "MO",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MS: {
                id: "MS",
                'id_no_spaces': "MS",
                tooltip: "Region 4: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    href: '#scrollToAchor',
                    primaryContactInfo: (sectors.regionFour),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            MT: {
                id: "MT",
                'id_no_spaces': "MT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NC: {
                id: "NC",
                'id_no_spaces': "NC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionThree),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            ND: {
                id: "ND",
                'id_no_spaces': "ND",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NE: {
                id: "NE",
                'id_no_spaces': "NE",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NH: {
                id: "NH",
                'id_no_spaces': "NH",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NJ: {
                id: "NJ",
                'id_no_spaces': "NJ",
                tooltip: "Region 2: CSI of Virginiam Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionTwo),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NM: {
                id: "NM",
                'id_no_spaces': "NM",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NV: {
                id: "NV",
                'id_no_spaces': "NV",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            NY: {
                id: "NY",
                'id_no_spaces': "NY",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            OH: {
                id: "OH",
                'id_no_spaces': "OH",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            OK: {
                id: "OK",
                'id_no_spaces': "OK",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            OR: {
                id: "OR",
                'id_no_spaces': "OR",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            PA: {
                id: "PA",
                'id_no_spaces': "PA",
                tooltip: "Region 2: CSI of Virginia",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionTwo),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            RI: {
                id: "RI",
                'id_no_spaces': "RI",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            SC: {
                id: "SC",
                'id_no_spaces': "SC",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionThree),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            SD: {
                id: "SD",
                'id_no_spaces': "SD",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            TN: {
                id: "TN",
                'id_no_spaces': "TN",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionThree),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            TX: {
                id: "TX",
                'id_no_spaces': "TX",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            UT: {
                id: "UT",
                'id_no_spaces': "UT",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            VA: {
                id: "VA",
                'id_no_spaces': "VA",
                tooltip: "Region 3: CSI of Virginia, Inc.",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionThree),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            VT: {
                id: "VT",
                'id_no_spaces': "VT",
                tooltip: "Region 1: Comiskey & Associates LLC",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionOne),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            WA: {
                id: "WA",
                'id_no_spaces': "WA",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            WI: {
                id: "WI",
                'id_no_spaces': "WI",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            WV: {
                id: "WV",
                'id_no_spaces': "WV",
                tooltip: "Region 5: CSI of Virginia, Inc. ",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.regionFive),
                    secondaryContactInfo: (sectors.corporateOffice)
                }
            },
            WY: {
                id: "WY",
                'id_no_spaces': "WY",
                tooltip: "CSI of Virginia, Inc. - Corporate Office",
                href: '#scrollToAchor',
                data: {
                    primaryContactInfo: (sectors.csiVa),
                    secondaryContactInfo: (sectors.corporateOffice)

                }
            }
        },
        viewBox: [0, 0, 959, 593],

        onClick: function () {
            $('#contactInfo').empty()
            $('#contactInfoTable').empty()
            $('#table').show()

            var regionContactInfo = this.data.primaryContactInfo
            var _regiontempProductName = regionContactInfo.product

            for (var i = 0; i < regionContactInfo.product.length; i++) {
                _regionContactTemp = regionContactInfo.product[i];
                if (_regiontempProductName.includes(regionProductName)) {
                    var regionContactInfo = this.data.primaryContactInfo
                    // console.log('true')
                } else {
                    // console.log('false')
                    regionContactInfo = this.data.secondaryContactInfo
                    // console.log(regionContactInfo)
                }
            }

            var contactInfo = $('<div class="contact-info" id="scrollToAchor">');
            var regionName = $('<h3>').text('Region Name: ' + regionContactInfo.name);
            var regionPoduct = $('<h6>').text('Products: ' + regionContactInfo.product.join(", "));
            var regionAddress = $('<h6>').text(regionContactInfo.address);
            var regionOffice = $('<h6>').text('Office Number: ' + regionContactInfo.office);
            
            contactInfo.append(regionName);
            contactInfo.append(regionPoduct);
            contactInfo.append(regionAddress);
            contactInfo.append(regionOffice);
            

            var contactInfoTableRowOne = $('<tr>');
            var contactInfoTableRowTwo = $('<tr>');
            var contactInfoTableRowThree = $('<tr>');
            var contactInfoTableRowFour = $('<tr>');

            if (typeof regionContactInfo.contacts[1] === "undefined") {
                var firstContactName = $('<td>').text(regionContactInfo.contacts[0].name);
                contactInfoTableRowOne.append(firstContactName);
                var firstContactPhone = $('<td>').text(regionContactInfo.contacts[0].phone);
                contactInfoTableRowOne.append(firstContactPhone);
                var firstContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[0].email + '>' +
                    regionContactInfo.contacts[0].email + '</a>');
                contactInfoTableRowOne.append(firstContactEmail);
            } else if (typeof regionContactInfo.contacts[2] === "undefined") {
                var firstContactName = $('<td>').text(regionContactInfo.contacts[0].name);
                contactInfoTableRowOne.append(firstContactName);
                var firstContactPhone = $('<td>').text(regionContactInfo.contacts[0].phone);
                contactInfoTableRowOne.append(firstContactPhone);
                var firstContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[0].email + '>' +
                    regionContactInfo.contacts[0].email + '</a>');
                contactInfoTableRowOne.append(firstContactEmail);
                var secondContactName = $('<td>').text(regionContactInfo.contacts[1].name);
                contactInfoTableRowTwo.append(secondContactName);
                var secondContactPhone = $('<td>').text(regionContactInfo.contacts[1].phone);
                contactInfoTableRowTwo.append(secondContactPhone);
                var secondContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[1].email + '>' +
                    regionContactInfo.contacts[1].email + '</a>');
                contactInfoTableRowTwo.append(secondContactEmail);
            } else if (typeof regionContactInfo.contacts[3] === "undefined") {
                var firstContactName = $('<td>').text(regionContactInfo.contacts[0].name);
                contactInfoTableRowOne.append(firstContactName);
                var firstContactPhone = $('<td>').text(regionContactInfo.contacts[0].phone);
                contactInfoTableRowOne.append(firstContactPhone);
                var firstContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[0].email + '>' +
                    regionContactInfo.contacts[0].email + '</a>');
                contactInfoTableRowOne.append(firstContactEmail);
                var secondContactName = $('<td>').text(regionContactInfo.contacts[1].name);
                contactInfoTableRowTwo.append(secondContactName);
                var secondContactPhone = $('<td>').text(regionContactInfo.contacts[1].phone);
                contactInfoTableRowTwo.append(secondContactPhone);
                var secondContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[1].email + '>' +
                    regionContactInfo.contacts[1].email + '</a>');
                contactInfoTableRowTwo.append(secondContactEmail);
                var thirdContactName = $('<td>').text(regionContactInfo.contacts[2].name);
                contactInfoTableRowThree.append(thirdContactName);
                var thirdContactPhone = $('<td>').text(regionContactInfo.contacts[2].phone);
                contactInfoTableRowThree.append(thirdContactPhone);
                var thirdContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[2].email + '>' + regionContactInfo.contacts[2].email + '</a>');
                contactInfoTableRowThree.append(thirdContactEmail);
            } else {
                var firstContactName = $('<td>').text(regionContactInfo.contacts[0].name);
                contactInfoTableRowOne.append(firstContactName);
                var firstContactPhone = $('<td>').text(regionContactInfo.contacts[0].phone);
                contactInfoTableRowOne.append(firstContactPhone);
                var firstContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[0].email + '>' +
                    regionContactInfo.contacts[0].email + '</a>');
                contactInfoTableRowOne.append(firstContactEmail);
                var secondContactName = $('<td>').text(regionContactInfo.contacts[1].name);
                contactInfoTableRowTwo.append(secondContactName);
                var secondContactPhone = $('<td>').text(regionContactInfo.contacts[1].phone);
                contactInfoTableRowTwo.append(secondContactPhone);
                var secondContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[1].email + '>' +
                    regionContactInfo.contacts[1].email + '</a>');
                contactInfoTableRowTwo.append(secondContactEmail);
                var thirdContactName = $('<td>').text(regionContactInfo.contacts[2].name);
                contactInfoTableRowThree.append(thirdContactName);
                var thirdContactPhone = $('<td>').text(regionContactInfo.contacts[2].phone);
                contactInfoTableRowThree.append(thirdContactPhone);
                var thirdContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[2].email + '>' + regionContactInfo.contacts[2].email + '</a>');
                contactInfoTableRowThree.append(thirdContactEmail);
                var fourthContactName = $('<td>').text(regionContactInfo.contacts[3].name);
                contactInfoTableRowFour.append(fourthContactName);
                var fourthContactPhone = $('<td>').text(regionContactInfo.contacts[3].phone);
                contactInfoTableRowFour.append(fourthContactPhone);
                var fourthContactEmail = $('<td>').html('<a href=mailto:' + regionContactInfo.contacts[3].email + '>' + regionContactInfo.contacts[3].email + '</a>');
                contactInfoTableRowFour.append(fourthContactEmail);
            }
            // Moves user down to the contactinfo 
            $("a[href^='#']").click(function (e) {
                e.preventDefault();

                var position = $($(this).attr("href")).offset().top;

                $("body, html").animate({
                    scrollTop: position
                } /* speed */ );
            });

            //Display contact Info
            $('#contactInfo').html(contactInfo);
            $('#contactInfoTable').append(contactInfoTableRowOne);
            $('#contactInfoTable').append(contactInfoTableRowTwo);
            $('#contactInfoTable').append(contactInfoTableRowThree);
            $('#contactInfoTable').append(contactInfoTableRowFour);

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
        title: "Sales Locator",
        responsive: true
    });
});