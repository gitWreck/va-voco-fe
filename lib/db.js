// lib/db.js
import { Pool } from 'pg';

let pool;

// --- ADD THIS DEBUGGING BLOCK ---
console.log("------------------------------------------------");
console.log("DEBUG: Checking Database Config");
console.log("NODE_ENV:", process.env.NODE_ENV);
// Do NOT log the full password, just check if the variable exists
console.log("POSTGRES_URL Exists?", !!process.env.POSTGRES_URL); 
console.log("POSTGRES_URL Start:", process.env.POSTGRES_URL ? process.env.POSTGRES_URL.substring(0, 15) : "UNDEFINED");
console.log("------------------------------------------------");
// --------------------------------

if (!global.pool) {
  global.pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false // Required for Supabase connections
    }
  });
}

pool = global.pool;

export default pool;


// // lib/db.js
// import { Pool } from 'pg';

// let pool;

// if (!global.pool) {
//   global.pool = new Pool({
//     connectionString: process.env.POSTGRES_URL,
//   });
// }
// pool = global.pool;

// export default pool;