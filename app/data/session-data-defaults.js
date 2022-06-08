/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here


   //Key users 
  "publicname": "Bob Hoskins",
  "caseworkername": "Jonanna Barton",
  
   //CASE 1
  "case-ref1": "AD2224",
  "case-name1": "Steel plate from Russia",
  "case-typeabr1": "AD",
  "case-type1": "Anti-dumping",
  "commodity1": "Steel plate",
  "country1": "Russia",
  "created1": "12 May 2022",
  "initiated1": "13 May 2022",
  "register-date1": "21 June 2022",
  "updated1": "14 May 2022",
  "status1": "Initiation notices published",
  "next-task1": "Publish questionnaires",
  "next-notice1": "26 July 2022",

  "applicant1": "Steelman Plc",
  "app-user1": "Vladimir Boffoff",
  "app-email1": "v.boffoff@Steelman.org",
  "app-submission1": "Questionnaire",
  "app-role1": "Producer",


  "party1": "Steel UK",
  "party-user1": "Simon Bellweather",
  "party-email1": "s.bellweather@steeluk.org",
  "party-submission1": "Registration of Interest",
  "party-country1": "United Kingdom",
  "party-role1": "(Application sent)",

  "party11": "StrongSteel",
  "party-user11": "Martine Hulk",
  "party-email11": "m.hulk@StrongSteel.org",
  "party-submission11": "Representative invite",
  "party-country11": "Russia",
  "party-status1": "Registration of interest received",

  "representative1": "BlueSteel Partners",
  "rep-user1": "Bob Hoskins",
  "rep-email1": "bobhoskins@BlueSteelPartners.com",
  "rep-role1": "Admin",
  "rep-mobile1": "+44 7854329445",
  "rep-mobile-national1": "07854329445",
  "rep-submission1": "Registration of Interest sent",


 //CASE 2 - case closed
  "case-ref2": "TS0002",
  "case-name2": "Rainbow Trout from Turkey",
  "case-typeabr2": "TAS",
  "case-type2": "Transition anti-subsidy review",
  "commodity2": "Rainbow Trout",
  "applicant2": "Secretary of State",
  "created2": "01 Feb 2019",
  "initiated2": "04 Mar 2019",
  "register-date2": "01 June 2019",
  "updated2": "30 Nov 2021",
  "country2": "Republic of Turkey",
  "status2": "	Final determination",
  "next-task2": "n/a",
  "next-notice2": "n/a",
  
  "party2": "Trouty Turks",
  "party-role2": "Exporter",
  "party-user2": "Clay Akin",

//CASE 3
  "case-ref3": "AG0404",
  "case-name3": "Farnets from Fabon",
  "case-typeabr3": "AS",
  "case-type3": "Anti-subsidy investigation",
  "commodity3": "Farnets",
  "applicant3": "Farnets First UK",
  "country3": "Federation of Fabon",
  "created3": "13 April 2022",
  "initiated3": "16 April 2022",
  "register-date3": "01 May 2022",
  "updated3": "16 April 2022",
  "status3": "Case initiated",
  "next-task3": "Issue questionnaires",
  "next-notice3": "01 June 2022",

  "party3": "Fabulous Farnets",
  "party-user3": "Odessa Seas",
  "party-email3": "o.seas@fabulous-farnets.fn",
  "party-role3": "Importer",
  "party-status5": "Questionnaires received",

  "representative3": "Lawyers RUs",
  "rep-user3": "Demi Morre",  
  "rep-email3": "demi.morre@LawyersRUs.com",
  "rep-role3": "(Invite sent)",
  "rep-user31": "Simone Ward",
  "rep-email31": "simone.ward@LawyersRUs.com",
  "rep-role31": "Unassigned",

//CASE 4
  "case-ref4": "BA0005",
  "case-name4": "Barnets from Tabon",
  "case-typeabr4": "SI",
  "case-type4": "Safeguarding Invesitgation",
  "commodity4": "Barnets",
  "applicant4": "Tabon Holdings",
  "created4": "	13 Nov 2020",
  "initiated4": "20 Nov 2020",
  "register-date4": "05 Dec 2020",
  "updated4": "23 Dec 2021",
  "country4": "United Kingdom",
  "status4": "Questionnaires issued",
  "next-task4": "Process questionnaires",
  "next-notice4": "02 Feb 2021",

  "party4": "Best Barnets Corp",
  "party-user4": "Mohawks Fringe",
  "party-email4": "m.fringe@best-barnets.uk",
  "party-role4": "Importer",

  "representative3": "Lawyers RUs",
  "rep-user3": "Demi Morre",  
  "rep-email3": "demi.morre@LawyersRUs.com",
  "rep-role3": "Representative",

  //CASE 5
  "case-ref5": "AS3464",
  "case-name5": "Garnets from Gabon",
  "case-typeabr5": "AS",
  "case-type5": "Anti-subsidy investigation",
  "commodity5": "Garnet stones",
  "applicant5": "Secretary of State",
  "created5": "24 Dec 2020",
  "initiated5": "01 Jan 2021",
  "register-date5": "15 Jan 2021",
  "updated5": "08 Jan 2022",
  "country5": "Republic of Gabon",
  "status5": "Processing applications",
  "next-task5": "Initiation",
  "next-notice5": "01 June 2022",
  "case-role5": "Declined",

  "party5": "Glorious Gabon Plc",
  "party-user5": "George Spinter",
  "party-user5": "Spinter@glorgabon.gb",
  "party-status5": "Questionnaire received",

  //"representative1": "BlueSteel Partners",   Using Bob for this one as Jon is deactived
  "rep-user5": "Jon Bodwin",
  "rep-email5": "jon.bodwins@BlueSteelPartners.com",
  "rep-role5": "De-activated",
  

  //CASE 6
  "case-ref6": "SI9405",
  "case-name6": "Electric Bikes",
  "case-typeabr6": "SI",
  "case-type6": "Safeguarding Invesitgation",
  "commodity6": "Electric Bikes",
  "applicant6": "Bikers Ltd",
  "created6": "07 July 2021",
  "initiated6": "24 July 2021",
  "register-date6": "07 Aug 2021",
  "updated6": "24 March 2022",
  "country6": "Republic of China",
  "status6": "Post-verification analysis",
  "next-task6": "The Statement of Essential Facts",
  "next-notice6": "24 Sept 2022",

  // This is their own case. Not representing another party
  "rep-user6": "BlueSteel Partners",
  "rep-user6": "Arnie Swarts",
  "rep-email6": "arnieswarts@BlueSteelPartners.com",
  "rep-status6": "Deficiency notice issued",
  "rep-role6": "Regular",


//CASE 7 - DRAFT yet to be made public
  "case-ref7": "AD12234",
  "case-name7": "Corn-on-cob from Alaska",
  "case-typeabr7": "AD",
  "case-type7": "Anti-dumping",
  "commodity7": "Corn-on-cob, sweetcorn",
  "applicant7": "Secretary of State",
  "created7": "07 March 2022",
  "initiated7": "n/a",
  "register-date7": "n/a",
  "updated7": "24 July 2021",
  "country7": "United States",
  "status7": "DRAFT",
  "next-task7": "n/a",
  "next-notice7": "n/a/",

}