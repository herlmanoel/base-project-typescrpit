import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('✅ Successfully connected with database'))
  .catch((err: any) => console.log(`❌ Error: ${err}`));
