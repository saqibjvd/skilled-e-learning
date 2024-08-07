//..........BACKEND............

const database = require("../database");

// Display all videos list on page
export async function GET() {
  return Response.json(await database);
}

// Create new todotask
export async function POST(req, res) {
  const data = await req.json();

  await database.addNewTask(data.newVideo);
  return Response.json(await database.getAllVides());
}

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