import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEmailToOffer1768323459350 implements MigrationInterface {
  name = 'AddEmailToOffer1768323459350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" ADD "email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offers" DROP COLUMN "email"`);
    }
}
