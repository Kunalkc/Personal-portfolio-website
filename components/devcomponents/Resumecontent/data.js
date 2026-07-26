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
           location: "Oracle Financial Services Software",
           startdate: new Date(2023, 6, 13),
           enddate: new Date(2024, 5, 8),
           summary:"Customizing Oracle's Flexcube Module as per Requirement of foreign institutional clients, my tasks included understanding their technical requirements and implementing them on the codebase",
        },
        {
            id:2,
            position: "Project Intern",
            location: "Oracle Financial Services Software",
            startdate: new Date(2022, 6, 1),
            enddate: new Date(2022, 7, 26),
            summary:"Implementation tool-kit for a Leading Bank in Brazil",
        }
     ],
     proj:[
        {},
        {}
     ],
     ab: "Hey, I’m a software developer with a background in Computer Science. Passionate about building products that make an impact and always looking forward to collaborating with creative minds.",
     skl:[
        {
            id:1,
            name: "Data Structures and Algorithms",
        },
         {   id:2,
         name: "C, C++, SQL, PL/SQL",
        },
         {   id:3,
            name: "html, css, javascript",
        },
         {
          id:4,
          name: "React.js, React-Native, JSX, Bootstrap, Tailwind",
        },
         {
            id:5,
            name: "Express.js, Node.js, MongoDB, SQL, Mongoose",
        },
        {
            id:6,
            name: "Github, Matlab, maven, Postman, Jira, Cloudinary, Multer, Google-auth", 
        }
        
     ],
     cont:{
        ph: "7018453549",
        email: "Kunalchandel09@gmail.com",
     },
     ed:[
          {
            id:1,
            Degree: "M.tech Computer Science and Engineering",
            College: "IIT Hyderabad",
            Cgpi: "",
          },
          {
             id:2,
             Degree: "B.tech Computer Science and Engineering",
             College: "NIT Hamirpur",
             Cgpi: "8.65",
          }
     ]
}