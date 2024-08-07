// ...........this is DATABASE code where its connected with BACKEND.........


// import pg from "pg"; // require for postgress

// const { Pool } = pg; // conect to db

// const pool_options = {
//   connectionString: "MY_DB_API_HERE",
// };

// const pool = new Pool(pool_options);

// Display all VIDEOS

// export async function getAllVideos() {
//   const client = await pool.connect();

//   const result = await client.query(
//     "Select * FROM videos ORDER BY ASC, id ASC"
//   );
//   client.release();
//   return result.rows;
// }

// Add new video to database

// export async function addNewVideo(newVideo) {
//   const client = await pool.connect();
//   const result = await client.query(
//     "INSERT INTO videos (Title, URL) VALUES ($1, $2)",
//     [newVideo]
//   );
//   client.release();
// }


// Delete single Video

// export async function DeleteVideo(id) {
//   const client = await pool.connect();
//   const result = await client.query("DELETE FROM videos WHERE id = $1", [id]);
//   client.release();
// }



// Delete all Videos

// export async function DeleteAllVideos() {
//   const client = await pool.connect();
//   const result = await client.query("DELETE FROM Videos");
//   client.release();
// }