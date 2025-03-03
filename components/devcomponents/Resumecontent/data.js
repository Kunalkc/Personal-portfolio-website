const filesMap = new Map([
   ["Full Resume", { id: 1, filename: "Full Resume", onTab: true, selected: true }],
   ["Education", { id: 2, filename: "Education", onTab: false, selected: false }],
   ["Experience", { id: 3, filename: "Experience", onTab: false, selected: false }],
   ["Skills", { id: 4, filename: "Skills", onTab: false, selected: false }],
   ["Projects", { id: 5, filename: "Projects", onTab: false, selected: false }],
   ["About", { id: 6, filename: "About", onTab: false, selected: false }],
   ["Contact", { id: 7, filename: "Contact", onTab: false, selected: false }]
 ]);

export default{
     files:filesMap,
     exp:[
        {
           id: 1,
           position: "Associate Consultant",
           location: "Oracle Financial Services",
           startdate: new Date(2023, 6, 13),
           enddate: new Date(2024, 5, 8),
           summary:"nothing they slow af people",
        },
        {
            id:2,
            position: "Project Intern",
            location: "Oracle Financial Services",
            startdate: new Date(2023, 6, 13),
            enddate: new Date(2025, 5, 8),
            summary:"nothing they slow af people",
        },
        {
            id:3,
            position: "Project Intern",
            location: "Oracle Financial Services",
            startdate: new Date(2023, 6, 13),
            enddate: new Date(2025, 5, 8),
            summary:"nothing they slow af people",
        }
     ],
     proj:[
        {},
        {}
     ],
     ab: "",
     skl:[
        {
            name: "",
            url:""
        },
        {
            name: "",
            url:""
        }
     ],
     cont:{
        ph: "",
        email: "",
     },
     ed:[
        {

        },
        {

        }
     ]
}