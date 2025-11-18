import corn from "node-cron"
import {receive_email} from "./utils/index.js"



const init_cron_job = corn.schedule("* * * * *", async() => {
    
     await init_cron_worker()
    
})





async function init_cron_worker() {
    
}




