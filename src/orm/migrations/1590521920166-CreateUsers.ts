import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsers1590521920166 implements MigrationInterface {
  name = 'CreateUsers1590521920166';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(40),
        name VARCHAR(40),
        email VARCHAR(100) NOT NULL,
        password VARCHAR(70) NOT NULL,
        role VARCHAR(30) NOT NULL DEFAULT 'STANDARD',
        language VARCHAR(15) NOT NULL DEFAULT 'en-US',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`, undefined);
  }
}
