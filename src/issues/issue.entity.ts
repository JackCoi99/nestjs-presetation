import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Maps the Issue class to the issues table in SQLite.
@Entity('issues')
export class Issue {
    
    // Generates a unique ID for each issue.
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  title!: string;
  
  // Sets the initial status of new issues to open.
  @Column({ type: 'text', default: 'open' })
  status!: string;
}