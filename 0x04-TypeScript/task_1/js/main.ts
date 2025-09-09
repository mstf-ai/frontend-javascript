// Teacher interface
// interface Teacher {
//   readonly firstName: string;        // only modifiable when initialized
//     readonly lastName: string;         // only modifiable when initialized
//       fullTimeEmployee: boolean;         // must always be defined
//         yearsOfExperience?: number;        // optional
//           location: string;                  // must always be defined
//             [key: string]: any;                // allow any other attributes
//             }
//
//             // Example teachers
//             const teacher1: Teacher = {
//               firstName: 'Alice',
//                 lastName: 'Smith',
//                   fullTimeEmployee: true,
//                     location: 'New York',
//                       yearsOfExperience: 5,
//                         contract: true,
//                         };
//
//                         const teacher2: Teacher = {
//                           firstName: 'Bob',
//                             lastName: 'Johnson',
//                               fullTimeEmployee: false,
//                                 location: 'Paris',
//                                 };
//
//                                 // Example adding any extra property
//                                 const teacher3: Teacher = {
//                                   firstName: 'John',
//                                     lastName: 'Doe',
//                                       fullTimeEmployee: false,
//                                         location: 'London',
//                                           contract: false,
//                                           };
//
//                                           console.log(teacher1);
//                                           console.log(teacher2);
//                                           console.log(teacher3);
//
