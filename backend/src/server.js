require('dotenv').config();

const app = require('./app');
const pool = require('./config/database');
const initDatabase = require('./config/initDatabase');
const port = process.env.PORT || 3000;

function validateProductionEnvironment() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const required = ['FRONTEND_URL', 'ADMIN_PASSWORD'];
  const missing = required.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required production environment variables: ${missing.join(', ')}`
    );
  }
}

async function startServer() {
  try {
    validateProductionEnvironment();

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
