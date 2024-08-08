//..........BACKEND............

// CRUD.......
// export default function GET(req, res) {
//   console.log("GET REQUEST")
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

//const database = require("../database");

// Display all videos list on page
// export async function GET() {
//   return Response.json(await database);
// }

// Create new todotask
// export async function POST(req, res) {
//   const data = await req.json();

//   await database.addNewTask(data.newVideo);
//   return Response.json(await database.getAllVides());
// }

// Delete tasks
// export async function DELETE(req) {
//   const data = await req.json();
//   if (data.completed) {
//    await database.DeleteCompletedTask();
//   } else {
//    await database.DeleteAllTask();
//   }
//   return Response.json(await database.getAllTask());
// }