require('dotenv').config();

const app = require('./app');
const pool = require('./config/database');
const initDatabase = require('./config/initDatabase');
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    const connection = await pool.getConnection();

    console.log('konek');
    connection.release();

    await initDatabase();

    app.listen(port, () => {
      console.log(`Server di port ${port}`);
    });

  } catch (error) {
    console.error('eror');
    console.error(error.message);
  }
}

startServer();
