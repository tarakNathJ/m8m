import { prisma, schemaType } from "@master/database";

type responce_type = {
  meta_data: object;
  name: string;
};
class database_service_provider {
  async getdata(id: number, stage: number): Promise<responce_type | any> {
    try {
      const prisma_transaction = await prisma.$transaction(async (ts) => {
        const get_steprun_table = await ts.stepes_run.findFirst({
          where: {
            id: id,
          },
          select: {
            meta_data: true,
            workflow_id: true,
          },
        });
        if (!get_steprun_table) {
          return false;
        }

        const get_step_find_by_id_and_index = await ts.step.findUnique({
          where: {
            workflow_id_index: {
              workflow_id: get_steprun_table?.workflow_id as number,
              index: stage,
            },
          },
          select: {
            name: true,
            meta_data: true,
          },
        });
        if (!get_step_find_by_id_and_index) {
          return false;
        }

        return {get_step_find_by_id_and_index , get_steprun_table} ;
      });

      return prisma_transaction;
    } catch (error :any) {
       return false;
    }
  }
}

export { database_service_provider };
