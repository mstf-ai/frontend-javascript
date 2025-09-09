// Define the Student interface
// interface Student {
//   firstName: string;
//     lastName: string;
//       age: number;
//         location: string;
//         }
//
//         // Create two student objects
//         const student1: Student = {
//           firstName: "Mostafa",
//             lastName: "Khamis",
//               age: 23,
//                 location: "Cairo"
//                 };
//
//                 const student2: Student = {
//                   firstName: "Amina",
//                     lastName: "Ali",
//                       age: 22,
//                         location: "Alexandria"
//                         };
//
//                         // Create an array containing the students
//                         const studentsList: Student[] = [student1, student2];
//
//                         // Render a table in the HTML body
//                         const table: HTMLTableElement = document.createElement("table");
//                         document.body.appendChild(table);
//
//                         // For each student, append a row containing first name and location
//                         studentsList.forEach((student) => {
//                           const row: HTMLTableRowElement = table.insertRow();
//                             const firstNameCell: HTMLTableCellElement = row.insertCell();
//                               const locationCell: HTMLTableCellElement = row.insertCell();
//
//                                 firstNameCell.textContent = student.firstName;
//                                   locationCell.textContent = student.location;
//                                   });
//                                   
