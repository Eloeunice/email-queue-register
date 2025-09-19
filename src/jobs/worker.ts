import { myWorker } from "./queue";


myWorker.on('completed', job => {
  console.log(`${job.id} has completed!`);
});

// job pode ser null aqui
myWorker.on('failed', (job, err) => {
  console.log(`${job?.id} has failed with ${err.message}`);
});