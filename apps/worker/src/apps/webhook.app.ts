import { prisma, schemaType } from "@master/database";

export async function add_receivers_email_validation(stepes_run_id: number) {
  try {
    const add_new_entry = await prisma.$transaction(async (ts) => {
      const find_working_step_validator =
        await ts.working_step_validator.findFirst({
          where: {
            stepes_run_id: stepes_run_id,
            status: schemaType.step_validation_status.SUCCCESS,
          },
          select: {
            id: true,
            email: true,
            message_id: true,
          },
        });

      await ts.reseve_email_validator.create({
        data: {
          working_step_validator_id: find_working_step_validator?.id as number,
          email: find_working_step_validator?.email as string,
          message_id: find_working_step_validator?.message_id as string,
          status: schemaType.step_validation_status.PANDING,
          create_at: new Date(),
        },
      });

      return true;
    });

    return add_new_entry ? true : false;
  } catch (error: any) {
    console.error(error.message);
    return false
  }
}
