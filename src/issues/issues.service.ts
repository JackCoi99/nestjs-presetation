import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Repository } from 'typeorm';
import { Issue } from './issue.entity.js';

@Injectable()
export class IssuesService {
    // Injects the TypeORM repository used to read and write issues.
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}
  
  // Retrieves all issues from SQLite, ordered by ID.
  findAll() {
    return this.issueRepository.find({ order: { id: 'ASC' } });
  }
  
  // Trims the title and saves a new issue in SQLite.
  create(title: string) {
    const issue = this.issueRepository.create({
      title: title.trim(),
    });

    return this.issueRepository.save(issue);
  }
}
